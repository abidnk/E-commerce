import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken, selectUserid } from "../../redux/ProdctSlice";
import { selectProduct, selectToken, setProducts } from "../../redux/ProdctSlice";

const ViewProduct = () => {
  const token = useSelector(selectToken);
  const dispatch=useDispatch()
  const products = useSelector(selectProduct);
  const [updatedProductData, setUpdatedProductData] = useState(null);
  const {id} = useParams()
  console.log(id);
  const dealerToken = token;
  const userId=useSelector(selectUserid)
  const userToken=useSelector(selectUserToken)
  console.log("userid",userId)
  console.log("token",userToken);



  const getAllProducts = async (token) => {
    try {
      const response = await axios.get(
        "https://ecommerce-api.bridgeon.in/products?accessKey=588fb4a56ca2d201c19d",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { status, message, data } = response.data;
      if (status === "success") { 
        // Successfully fetched products.
        dispatch(setProducts(data)); // Use setProductsAction instead of setProducts
        console.log("Fetched products:", data);
      } else {
        console.error("Product retrieval failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  useEffect(() => {
    getAllProducts(dealerToken);
  }, [updatedProductData]);
  //Code for filtering the product using ID
  const data =products.filter((item) => item._id=== id)


const handleCart = async (productId) => {
  try {
    console.log("Adding product to cart...");
    console.log("Product ID:", productId);
    console.log("User ID:", userId);
    console.log("User Token:", userToken);

    const response = await axios.post(
      `https://ecommerce-api.bridgeon.in/users/${userId}/cart/${productId}`,
      null, // Assuming no data payload, pass null if not needed
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

// Log the response from the server

    if (response.data.status === 'success') {
      console.log('Product added to cart.');
      toast.success("product added to cart  succussfully")
    } else {
      console.error('Product addition to cart failed. Message:', response.data.message);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};




  

  return (
    <>
      <NavBar />
      <div className="view container mt-5 mb-5">
        {data?.map((item) => (
          <div key={item._id}>
            <div>
              <MDBRow className="g-0 bg-light position-relative">
                <MDBCol md="6" className="mb-md-0 p-md-4 mt-5">
                  <img src={item.image} className="img-fluid" alt="okdaa" />
                </MDBCol>

                <MDBCol
                  md="5"
                  className="p-6 ps-md-6 d-flex align-items-center justify-content-center"
                  id="view-right"
                >
                  <div className="viewright-down bg-">
                    <h1 className="mt-0">{item.title} </h1>
                    <h4
                      className="oldprice"
                      style={{ textDecoration: "line-through" }}
                    >
                      ₹69,000
                    </h4>
                    <h2>Rs.{item.price}</h2>

                    <div className="contu">
                      <div>
                        <MDBBtn
                          className="me-1"
                          style={{ backgroundColor: "black" }}
                          onClick={() => handleCart(item._id)}
                        >
                          Add to cart
                        </MDBBtn>
                        <MDBBtn
                          className="me-4"
                          style={{ backgroundColor: "black" }}
                          onClick={() => {}}
                        >
                          Buynow
                        </MDBBtn>

                      </div>
                      <br/>

                      <div>
                        <span role="img" aria-label="star">
                          ⭐️⭐️⭐️⭐️⭐️ (156+ user Ratings)
                        </span>
                        <hr/>
                        <p>
                         {item.description}
                        </p>
                      </div>
                        <hr/>
                      <MDBCol
                        lg="4"
                        md="6"
                        className="md-6 d-inline-flex"
                      ></MDBCol>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        ))}
      </div>
      <MDBCardImage className="ms-0 img-fluid" src="/src/assets/img/Screenshot from 2023-11-22 15-41-12.png" />

      <Footer />
    </>
  );
};
export default ViewProduct
