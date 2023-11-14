
import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol,
  MDBCardSubTitle,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectProduct, selectToken,  setProducts  } from "../../redux/ProdctSlice";
import axios from "axios";

function AdmViewproduct() {
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

  const deleteProduct = async (productId, token) => {
    try {
      const response = await axios.delete(
        `https://ecommerce-api.bridgeon.in/products/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { status, message } = response.data;
      if (status === "success") {
        // Successfully deleted the product.
        console.log("Product deleted.");
        // Call the API again to refresh the product list
        getAllProducts(token);
      } else {
        console.error("Product deletion failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const handleDelete = (productId) => {
    deleteProduct(productId, token);
  };
  const handleUpdateProduct = async (
    productId,
    updatedProductData,
    token
  ) => {
    try {
      const response = await axios.patch(
        `https://ecommerce-api.bridgeon.in/products/${productId}`,
        updatedProductData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { status, message, data } = response.data;
      if (status === "success") {
        // Successfully updated the product.
        console.log("Updated product details:", data);
        // Call the API again to refresh the product list
        getAllProducts(token);
        setIsedit(false); // Hide the edit section after successful update
        alert(`succussfully updated  ${updatedProductData.title}`);
      } else {
        console.error("Product update failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);

      setIsedit(false);
    }
  };

  return (
    <div>
      <h1 className="our">PRODUCTS DETAILS</h1>
      {products.length === 0 ? (
        <h3>There are no products.</h3>
      ) : (
        <MDBRow>
          {products.map((item) => (
            <MDBCol
              md="3"
              key={item.id}
              className="d-inline-flex shadow p-3 mb-5 "
            >
              <MDBCard>
                {/* <Link to={`/add/${item.id}`}> */}
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image"
                >
                  <MDBCardImage src={item.image} fluid alt="..." />
                  <a>
                    <div
                      className="mask"
                      // style={{ backgroundColor: "black" }}
                    ></div>
                  </a>
                </MDBRipple>
                {/* </Link> */}

                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardSubTitle>price:$ {item.price}</MDBCardSubTitle>
                  <MDBCardText>{item.discription}</MDBCardText>
                  <MDBRow>
                  <Link to={`/admedit/${item._id}`}>
                    <MDBBtn
                      style={{ backgroundColor: "black" }}
                      
                    >
                      Edit Product
                    </MDBBtn>
                    </Link>
                    <MDBBtn
                      className="mt-2"
                      style={{ backgroundColor: "black" }}
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete Product
                    </MDBBtn>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      )}
    </div>
  );
}

export default AdmViewproduct;
