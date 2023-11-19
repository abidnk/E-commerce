import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, selectToken, setProducts } from "../../redux/ProdctSlice";
import { useEffect, useState } from "react";
import axios from "axios";
  
  
  const Elite = () => {
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
  
   
      const data =products.filter((item) => item.category==="elite")
      console.log(data);
      return (
  <>
        
        <div className="view container mt-5" >
            <h1>Our Elite Ebike Range</h1>
            {data.length === 0 ? (
          <img src="https://previews.123rf.com/images/roxanabalint/roxanabalint1904/roxanabalint190400154/123529842-temporarily-out-of-stock-sign-or-stamp-on-white-background-vector-illustration.jpg"></img>
        ) : (
          data.map((item) => (
            <div key={item.id}>
              <div>
                <MDBRow className="g-0 bg-light position-relative">
                  <MDBCol md="6" className="mb-md-0 p-md-4">
                    <img src={item.src} className="img-fluid" alt="..." />
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
                       ₹{item.old}
                       </h4>
                      <h2> ₹{item.price}</h2>
                      <p>{item.discription}</p>
  
                      <div className="contu">
                        <div>
                          <span role="img" aria-label="star">
                          <i class="a-icon a-icon-star a-star-4 cm-cr-review-stars-spacing-big"><span class="a-icon-alt">4.1 out of 5 stars</span></i> (276+ user Ratings)
                          </span>
                          
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
          ))
        )}
        </div>
        <MDBCardImage
          className="ms-0 img-fluid"
          src=""
        />
  
       
      </>
        );
      };
      export default Elite 
    