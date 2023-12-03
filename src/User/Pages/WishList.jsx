import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./WishList.css";
import NavBar from "../Components/NavBar";
import { selectUserToken, selectUserid } from "../../redux/AuthSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function WishList() {
  const userToken = useSelector(selectUserToken);
  const userId = useSelector(selectUserid);
  const [wishListItems, setWishListItems] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const viewCart = async (userId, token) => {
    try {
      const response = await axios.get(`${baseUrl}/users/${userId}/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { status, message, data } = response.data;
      if (status === "success") {
        setWishListItems(data.products || []);
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
      const confirmResult = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to remove this item from the wishlist?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!",
        cancelButtonText: "Cancel",
      });

      if (confirmResult.isConfirmed) {
        const response = await axios.delete(
          `${baseUrl}/users/${userId}/wishlist/${id}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        if (response.data.status === "success") {
          setWishListItems((items) => items.filter((item) => item._id !== id));
          Swal.fire("Deleted!", "The item has been removed.", "success");
          console.log("Item deleted successfully.");
          window.location.reload();
        } else {
          console.error(
            "Failed to delete item. Message:",
            response.data.message
          );
        }
      }
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "Error!",
        text: "Error in the server side. Please Try again later",
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "center",
      });
    }
  };

  return (
    <>
      <NavBar />
      <MDBContainer fluid>
        {wishListItems.map((value) => (
          <MDBRow key={value._id} className="justify-content-center mb-0">
            {value.wishlist.map((item) => (
              <MDBCol key={item._id} md="12" xl="10">
                <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <MDBCardImage
                            src={item.image}
                            fluid
                            className="w-100"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </MDBCol>
                      <MDBCol md="12" lg="9">
                        <h5>{item.title}</h5>
                        <div className="d-flex flex-row">
                          <div className="text-danger mb-1 me-2">
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                          </div>
                          <span>310</span>
                        </div>
                        <p className="text-truncate mb-4 mb-md-0">
                          {item.description}
                        </p>
                        <div className="d-flex flex-row align-items-center mb-1">
                          <h4 className="mb-1 me-1">{item.price}</h4>
                          <span className="text-danger">
                            <s>$20.99</s>
                          </span>
                        </div>
                        <h6 className="text-success">Free shipping</h6>
                        <div className="d-flex flex-column mt-4">
                          <Link to={"/payment"}>
                            <MDBBtn color="primary" size="sm" className="w-50">
                              Buy Now
                            </MDBBtn>
                          </Link>
                          <MDBBtn
                            onClick={() => deleteItem(item._id)}
                            outline
                            color="primary"
                            size="sm"
                            className="mt-2 w-50"
                          >
                            Remove
                          </MDBBtn>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        ))}
      </MDBContainer>
    </>
  );
}

export default WishList;
