import React, { useState } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import axios from "axios";
import AdmNavBar from "./AdmNavBar";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { selectToken } from "../../redux/AuthSlice";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Product Name is required"),
  price: Yup.number().required("Price is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
  image: Yup.mixed().required("Image is required"),
});

const AdmAdd = () => {
  const token = useSelector(selectToken);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async (values, { setErrors }) => {
    if (Object.keys(errors).length === 0) {
      // Proceed with form submission if no errors
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("price", values.price);
      formData.append("description", values.description);
      formData.append("category", values.category);
      formData.append("img", values.image);

      try {
        const response = await axios.post(`${baseUrl}/products`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        const { status, message, data } = response.data;
        if (status === "success") {
          console.log("Product added. Product details:", data);
          // Show success message
          Swal.fire({
            title: "Success!",
            text: "Product added successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
            position: "center",
          });
          navigate("/admhome");
        } else {
          console.error("Product addition failed. Message:", message);
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
    } else {
      setErrors(errors);
      console.error("Validation errors:", errors); // Handle validation errors
    }
  };

  return (
    <>
    <AdmNavBar/>
    <div className="ms-5 w-50">
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: "",
          image: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, errors }) => (
          <Form className="mt-5" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">PRODUCT NAME</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
                required
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">AMOUNT</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={values.price}
                onChange={handleChange}
                required
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">DISCRIPTION</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={values.description}
                onChange={handleChange}
                required
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">CATEGORY</label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={values.category}
                onChange={handleChange}
                required
              />
              <ErrorMessage
                name="category"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={handleChange}
                required
              />
              <ErrorMessage
                name="image"
                component="div"
                className="text-danger"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-3"
              disabled={Object.keys(errors).length > 0}
            >
              ADD PRODUCT
            </button>

            {showAlert && (
              <div className="alert alert-success mt-3">
                Product added successfully!
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
    </>
  );
};

export default AdmAdd;
