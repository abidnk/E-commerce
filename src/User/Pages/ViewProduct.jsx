import React, { useContext, useState } from "react";

import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { useSelector } from "react-redux";

const ViewProduct = () => {
    const selectData = (state) => state.product;
    const productsObject = useSelector(selectData);
    const prd = productsObject?.CardProduct;
    console.log(prd);
    const { id } = useParams();
    {prd?.map((item) =>{
      console.log(item.src)
    } )}
  const navigate = useNavigate();

  const data = prd?.filter((item) => item.id === parseInt(id));
  console.log(data,'kkkjkjkj');

  return (
    <>
      <NavBar/>
      <div className="view container ">
        {data?.map((item) => (
          <div key={item.id}>
            <div>
              <MDBRow className="g-0 bg-light position-relative">
                <MDBCol md="6" className="mb-md-0 p-md-4 mt-5">
                  <img src={item.src} className="img-fluid" alt="okdaa" />
                </MDBCol>

                <MDBCol
                  md="5"
                  className="p-6 ps-md-6 d-flex align-items-center justify-content-center"
                  id="view-right"
                >
                  <div className="viewright-down bg-">
                    <h1 className="mt-0">{item.name} </h1>
                    <h4
                className="oldprice"
                style={{ textDecoration: "line-through" }}
              >
                ₹{item?.old}
              </h4>
                    <h2>Rs{item.price}</h2>
                    

                    <div className="contu">
                      
                        <div>
                          <MDBBtn
                            className="me-1"
                            style={{ backgroundColor: "black" }}
                           
                          >
                            Add to cart
                          </MDBBtn>
                          <MDBBtn
                            className="me-4"
                            style={{ backgroundColor: "black" }}
                            onClick={() => {
                              navigate("/cart");
                            }}
                          >
                            Buynow
                          </MDBBtn>
                        </div>
                      <div>
                        <span role="img" aria-label="star">
                          ⭐️⭐️⭐️⭐️⭐️ (276+ user Ratings)
                        </span>
                        <p>
                        Our e-bikes are designed for every type of rider in India,
                         from the urban commuter to the adventure seeker. We offer a wide range
                          of models that cater to different needs and preferences, ensuring that 
                          everyone can find the perfect e-bike for their lifestyle.
                        We understand that buying an e-bike is an investment, which is why we go above
                         and beyond to provide our customers with exceptional service and support. From 
                         pre-sale consultations to post-purchase maintenance and repairs, we are committed
                          to ensuring that our customers have a seamless and hassle-free experience.
                        </p>
                      </div>

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
        src=""
      />

      <Footer/>
    </>
  );
};
export default ViewProduct;