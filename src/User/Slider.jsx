import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import { useSelector } from "react-redux";
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
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={true}
        dotListClass="custom-dot-list-style" 
      >
        {prd?.map((product) => (
          <div key={product?.id} className="card" style={{width:250 }}>
            <img
              className="product-img"
              src={product?.src}
              alt={`Product: ${product?.name}`}
            />
            <h2>{product?.name}</h2>
            <p className="price">{product?.price}</p>
            <p>
              <button>Buy Now</button>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider;
