import React, { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBBtn, MDBRipple, MDBInput } from "mdb-react-ui-kit";
import { useSelector } from 'react-redux';
import { selectToken } from "../../redux/ProdctSlice";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function AdminEdit() {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const { productId } = useParams();
  const [showAlert, setShowAlert] = useState(false);

  // State to manage form data (Edit cheyynda sadanm vekkan)
  const [productData, setProductData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  // code for updating form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
   // Code for updating image data
   const handleImageChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      image: e.target.files[0], 
    }));
  };

  // Fetch product details based on productId
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://ecommerce-api.bridgeon.in/products/${productId}`);
        const { data } = response;
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product details:', error.message);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const updateProduct = async (e) => {
    e.preventDefault(); 

    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("price", productData.price);
    formData.append("description", productData.description);
    formData.append("category", productData.category);
    formData.append("img", productData.image);

    // const updatedProductData = {
    //   title: productData.title,
    //   price: productData.price,
    //   description: productData.description,
    //   category: productData.category,
    //   // Add other fields as needed
    // };

    try {
      const response = await axios.patch(`https://ecommerce-api.bridgeon.in/products/${productId}`,formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
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
    <>
    <div className='container'>

      <div className='suba row'  style={{backgroundColor:"black"}}>
        <div className="col-md-6">
          <h2>Edit The Product</h2>
          <MDBCard
            id="card-form"
            className="shadow p-3 mb-5 bg-body-tertiary rounded m-4"
          >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
            >
              <MDBCardImage 
                src="/src/assets/img/Screenshot from 2023-11-16 12-35-58.png"
                fluid
                alt="..."
                style={{ boxShadow: "none", transition: "none" }} 
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
                  name='title'
                  value={productData.title}
                  onChange={handleInputChange}
                />
                <br />

                <label>Price</label>
                <MDBInput
                  label='Product Price'
                  type='number'
                  name='price'
                  value={productData.price}
                  onChange={handleInputChange}
                />
                <br />

                <label>Description</label>
                <MDBInput
                  label='Product Description'
                  type='textarea'
                  name='description'
                  value={productData.description}
                  onChange={handleInputChange}
                />
                <br />

                <label>Category</label>
                <MDBInput
                  label='Product Category'
                  type='text'
                  name='category'
                  value={productData.category}
                  onChange={handleInputChange}
                />
                <br />
                <label>Product Image</label>
                <MDBInput
                  label='Product Image'
                  type='file'
                  name='image'
                  onChange={handleImageChange}
                />
                <br />

                <MDBBtn style={{ backgroundColor: "black" }} type="submit">CONFIRM EDIT</MDBBtn>
                <MDBBtn className='ms-5' style={{ backgroundColor: "black" }} onClick={() => navigate('/admhome')}>Go Back</MDBBtn>
              </MDBCardBody>
            </form>
          </MDBCard>
        </div>
      </div>
    </div>
    </>
  );
}
