import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProduct, selectToken, setProducts } from "../../redux/ProdctSlice";
import axios from "axios";



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = () => {
  const token = useSelector(selectToken);
  const dispatch=useDispatch()
  const products = useSelector(selectProduct);
  const [isEdit, setIsedit] = useState(false);
  const [updatedProductData, setUpdatedProductData] = useState(null);

  const dealerToken = token;

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
 
  return (
    <div className="parent">
      <h1>Our Ebike Range</h1>
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
          <div className="bigcard"  style={{}}>
            <div key={product?._id} className="card" style={{ width: 450}}>
              <img
                className="product-img"
                src={product?.image}
                alt={`Product: ${product?.title}`}
              />
              <h2 style={{color:'black'}}>{product?.title}</h2>
              {/* <h6>{product?.description}</h6> */}
              <h5></h5>
              
              <h5
                className="oldprice"
                style={{ textDecoration: "line-through" }}
              >
                ₹64,999
              </h5>
              <h4 className="price" style={{color:'black'}}>₹{product?.price}</h4>
             
              <Link to={`/add/${product._id}`}>
              <button
                style={{
                  background: "black",
                  color: "white",
                  fontSize: "16px",
                  cursor: "pointer",
                  
                  border: "1px solid black",
                  padding: "15px 25px",
                }}
              >
                BUY NOW
              </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider;
