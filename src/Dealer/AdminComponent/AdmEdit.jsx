import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBInput,
} from "mdb-react-ui-kit";
import { useSelector } from 'react-redux';
import { selectToken } from "../../redux/ProdctSlice";

export default function Adminedit() {
    const token = useSelector(selectToken);

  const updateProduct = async (productId, updatedProductData, token) => {
    try {
      const response = await axios.patch(`https://ecommerce-api.bridgeon.in/products/${productId}`, updatedProductData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { status, message, data } = response.data;
      if (status === 'success') {
        console.log('Updated product details:', data);
      } else {
        console.error('Product update failed. Message:', message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };


  return (
    <div className='container'>
      <div className='suba row'>
        <div className="col-md-6">
          <h2>Edit As You Need</h2>
          <MDBCard
            id="card-form"
            className="shadow p-3 mb-5 bg-body-tertiary rounded m-4"
          >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
            >
              <MDBCardImage
                src=""
                fluid
                alt="..."
              />
            </MDBRipple>
          </MDBCard>
        </div>
        <div className="col-md-5 mt-5">
          <MDBCard
            id="card-form"
            className="shadow p-3 mb-5 bg-body-tertiary rounded m-3"
          >
            <form onSubmit={updateProduct}>
              <MDBCardBody>

                <MDBCardTitle>
                  <div>
                    <i>Edit</i>
                  </div>
                </MDBCardTitle>
                <label>Product Name</label>
                <MDBInput
                  label='Product Name'
                  type='text'
                  placeholder={productname}
                  disabled={isEdit}
                     />
                <br />

                <label>AMOUNT</label>
                <MDBInput
                  label='Product price'
                  type='number'
                  placeholder={productprice}
                  disabled={isEdit}
                >
                  <h5>Rs.</h5>
                </MDBInput>
                <br />
                <br />
                {!isEdit ? (
                  <MDBBtn  style={{ backgroundColor: "#b35946" }}>CONFIRM EDIT</MDBBtn>
                ) : null}
                <MDBBtn className='ms-5' style={{ backgroundColor: "#b35946" }}>Go Back</MDBBtn>
              </MDBCardBody>
            </form>
          </MDBCard>
        </div>
      </div>
    </div>
  );
}
