
import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardSubTitle,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProduct, selectToken,  setProducts  } from "../../redux/ProdctSlice";
import axios from "axios";
import AdmSpinner from "./AdmSpinner";
import Swal from 'sweetalert2';

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;


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
        `${baseUrl}/products?${apiKey}`,
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
        `${baseUrl}/products/${productId}`,
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
  Swal.fire({
    title: 'Are you sure?',
    text: 'You are about to delete this product!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
  }).then(async (result) => {
    if (result.isConfirmed) {
      await deleteProduct(productId, token);
      // Optionally, you can add additional actions after the deletion here.
      Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
    }
  });
};
 
  return (
    <div>
      <h1 className="our">PRODUCTS DETAILS</h1>
      {products.length === 0 ? (
        <AdmSpinner/>
      ) : (
        <MDBRow>
          {products.map((item) => (
            <MDBCol md="4" key={item.id}>
              <MDBCard>
                <MDBCardImage src={item.image} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                 
                  <MDBCardSubTitle>price:₹ {item.price}</MDBCardSubTitle>
                  <Link to={`/admedit/${item._id}`}>
                    <MDBBtn style={{ backgroundColor: "black", width: "100%" }}>Edit Product</MDBBtn>
                  </Link>
                  <MDBBtn
                    className="mt-2"
                    style={{ backgroundColor: "black", width: "100%" }}
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete Product
                  </MDBBtn>
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
