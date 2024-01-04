import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProduct, setProducts } from "../../redux/ProdctSlice";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import { selectToken } from "../../redux/AuthSlice";
const responsive = [
  {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
];

const Slider = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const [isEdit, setIsedit] = useState(false);
  const [updatedProductData, setUpdatedProductData] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const dealerToken = token;

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
        console.log("Fetched products:", data);
      } else {
        console.error("Product retrieval failed. Message:", message);
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


  
  useEffect(() => {
    getAllProducts(dealerToken);
  }, [updatedProductData]);




  console.log(products);
  return (
    <div className="parent">
      <h1>Our Range</h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding"
        customTransition="transform 300ms ease-in"
      >
        {products?.map((product) => (
          <div className="bigcard" style={{}}>
            <Link to={`/add/${product._id}`}>
              <MDBContainer fluid className="my-5">
                <MDBRow className="justify-content-center">
                  <MDBCol md="8">
                    <MDBCard className="text-black">
                      <MDBCardImage
                        src={product.image}
                        position="top"
                        alt="E-Motorad Bike"
                      />
                      <MDBCardBody>
                        <div className="text-center">
                          <MDBCardTitle>{product.title}</MDBCardTitle>
                          <p className="text-muted mb-4">An Electric Magic</p>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between">
                            <span>Type:</span>
                            <h6>{product.category}</h6>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between total font-weight-bold mt-4">
                          <span>Price:</span>
                          <span>₹{product.price}</span>
                        </div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ color: "green" }}
                        >
                          <span>*Free Delevery</span>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider;
