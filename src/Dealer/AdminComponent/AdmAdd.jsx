import React, { useState } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/ProdctSlice";
import axios from "axios";
import AdmNavBar from "./AdmNavBar";
import { Link, useNavigate } from "react-router-dom";

const AdmAdd = () => {
  const token = useSelector(selectToken);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate() 

  const addProduct = async (event) => {
    event.preventDefault();


    const formData = new FormData();
    formData.append("title", event.target.title.value); 
    formData.append("price", event.target.price.value); 
    formData.append("description", event.target.discription.value); 
    formData.append("category", event.target.category.value); 
    formData.append("img", event.target.image.files[0]);  
  
    try {
      const response = await axios.post(
        "https://ecommerce-api.bridgeon.in/products",formData,
       
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const { status, message, data } = response.data;
      if (status === "success") {
        // Product added successfully.
        console.log("Product added. Product details:", data);
        setShowAlert(true);
        
      } else {
        console.error("Product addition failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  

  return (
    <>
     <AdmNavBar/>
      <div>
          <form className="mt-5" onSubmit={addProduct}>
        <MDBRow className="g-0 bg-light position-relative ">
            <MDBCol md="6" className="mb-md-0 p-md-4">
              <img
                src="/src/assets/img/X-factor/X1.png"
                className="w-50"
                alt="..."
              />
            </MDBCol>
            <MDBCol
              md="5"
              className="p-6 ps-md-6 d-flex align-items-center justify-content-center"
              id="view-right"
            >
              <div className="viewright-down">
                <div>
                  <label>PRODUCT NAME</label>
                  <MDBInput
                    type="text"
                    label="PRODUCT NAME"
                    id="title"
                    name="name"
                  />
                </div>
                <div>
                  <label>AMOUNT</label>
                  <MDBInput
                    type="number"
                    label="AMOUNT"
                    id="price"
                    name="price"
                  />
                </div>
                <div>
                  <label>DISCRIPTION</label>
                  <MDBInput
                    type="text"
                    label="DISCRIPTION"
                    id="discription"
                    name="discription"
                  />
                </div>
                <div>
                  <label>CATEGORY</label>
                  <MDBInput
                    type="text"
                    label="category"
                    id="category"
                    name="category"
                  />
                </div>
                <div>
                  <label>Image</label>
                  <MDBInput type="file" label="IMAGE" id="image" name="image" />
                </div>
                <div>
                  <MDBBtn size="sm" type="submit" rounded color="link">
                    ADD PRODUCT
                  </MDBBtn>
                </div>
              </div>
            </MDBCol>
        </MDBRow>
          </form>
      </div>
      <Link to="/admhome">
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Product added successfully!
          
        </div>
      )}
      </Link>
      

    </>
  );
};

export default AdmAdd;
