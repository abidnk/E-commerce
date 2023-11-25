import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProduct,
  setProducts,
} from "../../redux/ProdctSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { selectToken } from "../../redux/AuthSlice";

const Xfactor = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const [isEdit, setIsedit] = useState(false);
  const [updatedProductData, setUpdatedProductData] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const dealerToken = token;
  const [clicked, setClicked] = useState(false);
  const heartClick = () => {
    setClicked(!clicked);
  };

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

  const data = products.filter((item) => item.category === "xfactor");
  console.log(data);
  return (
    <>
      <div className="view container mt-5">
        <h1>Our X-Factor Ebike Range</h1>
        {data?.map((item) => (
          <div key={item._id}>
            <div>
              <MDBRow className="g-0 bg-light position-relative">
                <MDBIcon
                  fas
                  icon="heart"
                  onClick={heartClick}
                  style={{
                    color: clicked ? "red" : "inherit",
                    cursor: "pointer",
                  }}
                />
                <MDBCol md="6" className="mb-md-0 p-md-4">
                  <img src={item.image} className="img-fluid" alt="..." />
                </MDBCol>

                <MDBCol
                  md="5"
                  className="p-6 ps-md-6 d-flex align-items-center justify-content-center"
                  id="view-right"
                >
                  <div className="viewright-down bg-">
                    <h1 className="mt-0">{item.title} </h1>
                    {/* <h4
                      className="oldprice"
                      style={{ textDecoration: "line-through" }}
                      >
                      ₹{item.old}
                    </h4> */}
                    <h2> ₹{item.price}</h2>
                    <p>{item.description}</p>

                    <div className="contu">
                      <div>
                        <span role="img" aria-label="star">
                          ⭐️⭐️⭐️⭐️⭐️ (276+ user Ratings)
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
        ))}
      </div>
      <MDBCardImage className="ms-0 img-fluid" src="" />
    </>
  );
};
export default Xfactor;
