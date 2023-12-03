import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { MDBRow, MDBCol, MDBBtn, MDBCardImage } from "mdb-react-ui-kit";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import {
  selectUserToken,
  selectUserid,
  selectToken,
} from "../../redux/AuthSlice";
import { selectProduct, setProducts } from "../../redux/ProdctSlice";

const ViewProduct = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const [updatedProductData, setUpdatedProductData] = useState(null);
  const { id } = useParams();

  const dealerToken = token;
  const userId = useSelector(selectUserid);
  const userToken = useSelector(selectUserToken);

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const getAllProducts = async (token) => {
    try {
      const response = await axios.get(
        `${baseUrl}/products?accessKey=${apiKey}`,
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
      } else {
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllProducts(dealerToken);
  }, [updatedProductData]);
  //Code for filtering the product using ID

  const data = products.filter((item) => item._id === id);

  const handleCart = async (productId) => {
    try {
      console.log("Adding product to cart...");
      console.log("Product ID:", productId);
      console.log("User ID:", userId);
      console.log("User Token:", userToken);

      const response = await axios.post(
        `${baseUrl}/users/${userId}/cart/${productId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (response.data.status === "success") {
        console.log("Product added to cart.");

        Swal.fire({
          title: "Success!",
          text: "Product added to cart successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
          toast: true,
          position: "bottom",
        });
      } else {
        console.error(
          "Product addition to cart failed. Message:",
          response.data.message
        );
      }
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "Failed!",
        text: "Product already added",
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "bottom-center",
      });
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
                      <br />

                      <div>
                        <span role="img" aria-label="star">
                          ⭐️⭐️⭐️⭐️⭐️ (156+ user Ratings)
                        </span>
                        <hr />
                        <p>{item.description}</p>
                      </div>
                      <hr />
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
      <MDBCardImage
        className="ms-0 img-fluid"
        src="/src/assets/img/Screenshot from 2023-11-22 15-41-12.png"
      />

      <Footer />
    </>
  );
};
export default ViewProduct;
