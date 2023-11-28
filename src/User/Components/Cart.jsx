import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUserToken, selectUserid } from "../../redux/AuthSlice";
import NavBar from "./NavBar";
import Swal from "sweetalert2";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Cart = () => {
  const userToken = useSelector(selectUserToken);
  const userId = useSelector(selectUserid);
  const [cartItems, setCartItems] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const viewCart = async (userId, token) => {
    try {
      const response = await axios.get(`${baseUrl}/users/${userId}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { status, message, data } = response.data;
      if (status === "success") {
        setCartItems(data.products || []);
      } else {
        console.error("Cart item retrieval failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    viewCart(userId, userToken);
  }, [userId, userToken]);

  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/users/${userId}/cart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (response.data.status === "success") {
        setCartItems((items) =>
          items.filter((item) => item._id !== id)
        );
        console.log('Item deleted successfully.');
        window.location.reload() 
      } else {
        console.error('Failed to delete item. Message:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
      Swal.fire({
        title: 'Error!',
        text: 'Error in the server side. Please Try again later',
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: 'center',
      });
    }
  };

  
  return (
    <div>
      <NavBar/>
      
      {cartItems.length === 0 ? (
        <>
      <h1>Your Cart is Empty</h1>
      </>
      ) : (
      <section className="navu h-100 mt-5" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  Shopping Cart
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>

              <MDBCard className="rounded-3 mb-4">
                {cartItems.map((value) => {
                  
                  return value.cart.map((item) => {
                    return(
                    <MDBCardBody className="p-4">
                      <MDBRow className="justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            className="rounded-3"
                            fluid
                            src={item.image}
                            alt="products"
                          />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <p className="lead fw-normal mb-2">{item.title}</p>
                          <p>
                            <span className="text-muted">Size: </span>M{" "}
                            <span className="text-muted">Color: </span>Grey
                          </p>
                        </MDBCol>
                        
                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                          <MDBTypography tag="h5" className="mb-0">
                           Price: ₹{item.price}
                          </MDBTypography>
                        </MDBCol>

                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-danger">
                            <MDBIcon
                              onClick={() => deleteItem(item._id)}
                              fas
                              icon="trash text-danger"
                              size="lg"
                            />
                          </a>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                    )
                  });
                })}
              </MDBCard>
              <MDBCard>
                <MDBCardBody>
                  <Link to={'/payment'}>
                  <MDBBtn
                    className="ms-3"
                    block
                    size="lg"
                    style={{ backgroundColor: "black" }}
                  >
                    Apply
                  </MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      )}
    </div>
  );
}
export default Cart;