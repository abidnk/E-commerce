import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AdmNavBar from "./AdmNavBar";
import { selectToken } from "../../redux/AuthSlice";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Product Name is required"),
  price: Yup.number().required("Price is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
  image: Yup.mixed().required("Image is required"),
});

const AdmAdd = () => {
  console.log("hola");
  const token = useSelector(selectToken);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("img", data.image);

      const response = await axios.post(`${baseUrl}/products`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const { status, message, data: responseData } = response.data;
      if (status === "success") {
        console.log("Product added. Product details:", responseData);
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
  };

  return (
    <>
      <AdmNavBar />
      <div className="ms-5 w-50">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <div className="form-group">
            <label htmlFor="title">PRODUCT NAME</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              {...register("title")} // Register the input field
              required
            />
            {errors.title && (
              <div className="text-danger error-message">
                {errors.title.message}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="price">AMOUNT</label>
            <input
              type="number"
              className="form-control"
              id="price"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <div className="text-danger error-message">
                {errors.price.message}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">DESCRIPTION</label>
            <textarea
              className="form-control"
              id="description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <div className="text-danger error-message">
                {errors.description.message}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="category">CATEGORY</label>
            <input
              type="text"
              className="form-control"
              id="category"
              {...register("category", { required: true })}
            />
            {errors.category && (
              <div className="text-danger error-message">
                {errors.category.message}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <div className="text-danger error-message">
                {errors.image.message}
              </div>
            )}
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
        </form>
      </div>
    </>
  );
};

export default AdmAdd;
