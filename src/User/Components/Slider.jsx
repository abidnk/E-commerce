import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



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
  const selectData = (state) => state.product;
  const productsObject = useSelector(selectData);
  const prd = productsObject?.CardProduct;
  console.log(prd);
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
        {prd?.map((product) => (
          <div className="bigcard">
            <div key={product?.id} className="card" style={{ width: 450 }}>
              <img
                className="product-img"
                src={product?.src}
                alt={`Product: ${product?.name}`}
              />
              <h2 style={{color:'black'}}>{product?.name}</h2>
              <h6>{product?.discription}</h6>
              <hr/>
              <h5
                className="oldprice"
                style={{ textDecoration: "line-through" }}
              >
                ₹{product?.old}
              </h5>
              <h4 className="price" style={{color:'black'}}>₹{product?.price}</h4>
             
              <Link to={`/add/${product.id}`}>
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
