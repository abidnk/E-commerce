import React from "react";
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
} from "mdb-react-ui-kit"



 function AdmViewproduct() {

const getAllProducts = async (token) => {
    try {
      const response = await axios.get('https://ecommerce-api.bridgeon.in/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { status, message, data } = response.data;
      if (status === 'success') {
        // Successfully fetched products.
        console.log('Fetched products:', data);
      } else {
        console.error('Product retrieval failed. Message:', message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  

  return (
    <div>
      <h1 className="our">PRODUCTS DETAILS</h1>
      <MDBRow>
        {gf.map((item) => (
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
                  <MDBCardImage src='' fluid alt="..." />
                  <a>
                    <div
                      className="mask"
                      style={{ backgroundColor: "black" }}
                    ></div>
                  </a>
                </MDBRipple>
              {/* </Link> */}

              <MDBCardBody>
                <MDBCardTitle>{item.name}</MDBCardTitle>
                <MDBCardSubTitle>price:$ {item.price}</MDBCardSubTitle>
                <MDBCardText>{item.discription}</MDBCardText>
                <MDBRow>
                  <MDBBtn style={{ backgroundColor: "black" }} >
                    Edit Product 
                  </MDBBtn>
                  <MDBBtn className="mt-2" style={{ backgroundColor: "black" }}>
                    Delete Product 
                  </MDBBtn>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}

export default  AdmViewproduct;
