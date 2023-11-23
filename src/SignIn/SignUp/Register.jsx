import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setUserToken } from "../../redux/ProdctSlice";
import Swal from "sweetalert2";


function Register() {
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const dispatch = useDispatch();
  

  const registerUser = async (accessKey, username, email, password) => {
    try {
      const response = await axios.post(
        `${baseUrl}/users/register`,
        {
          accessKey,
          username,
          email,
          password,
        }
      );
      const { status, message, data } = response.data;
      if (status === "success") {
        dispatch(setUserToken(data.token));
        navigate("/userlogin");
        console.log("Registration successful. Token:", data.token);
      } else {
        console.error("Registration failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: 'Error!',
        text: 'Error in the server side. Please Try again later',
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: 'center',
      });
    }
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    registerUser(`${apiKey}`, username, email, password);
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-5">
          <form onSubmit={handleRegistration}> 
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Name"
              size="lg"
              id="username"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="email"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="password"
              type="password"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Repeat your password"
              size="lg"
              id="1password"
              type="password"
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>
            <MDBBtn className="mb-4 w-100 gradient-custom-4" type="submit" size="lg">
              Register
            </MDBBtn>
            <p>
                    Aleady registered?{" "}
                    <Link to={"/userlogin"}>Click Here</Link>
                  </p>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
