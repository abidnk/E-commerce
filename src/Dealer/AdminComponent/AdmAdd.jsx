import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/ProdctSlice";
import axios from "axios";

const AdmAdd = () => {
  const token = useSelector(selectToken);

  const addProduct = async (event) => {
    event.preventDefault();
    const title = event.target.name.value;
    const price = event.target.price.value;
    const description = event.target.discription.value;
    const category = event.target.category.value;

    try {
      const response = await axios.post(
        "https://ecommerce-api.bridgeon.in/products",
        {
          title,
          price,
          description,
          category,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { status, message, data } = response.data;
      if (status === "success") {
        // Product added successfully.
        console.log("Product added. Product details:", data);
      } else {
        console.error("Product addition failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div>
          <form onSubmit={addProduct}>
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
                    id="name"
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
                  <MDBInput type="text" label="IMAGE" id="image" name="image" />
                </div>
                <div>
                  <MDBBtn size="sm" rounded color="link">
                    ADD PRODUCT
                  </MDBBtn>
                </div>
              </div>
            </MDBCol>
        </MDBRow>
          </form>
      </div>
    </>
  );
};

export default AdmAdd;
