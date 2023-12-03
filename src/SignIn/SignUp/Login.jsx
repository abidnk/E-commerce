import React, { useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  selectUserToken,
  selectUserid,
  setAdmin,
  setToken,
  setUserToken,
  setUserid,
} from "../../redux/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const isSignIn = useSelector((state) => state.product.isSignIn);
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(selectUserid);
  const userToken = useSelector(selectUserToken);

  const tologin = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    const isAdmin = email === "abidnk34@gmail.com";
    event.preventDefault();

    const accessKey = `${apiKey}`;
    if (isAdmin) {
      handleLogin(event);
    } else {
      loginUser(accessKey, email, password);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log(email);
    const password = event.target.password.value;
    console.log(password);

    setState([...state, { email: email, password: password }]);

    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });
      const { status, message, data } = response.data;
      console.log(response.data);
      if (status === "success") {
        const token = data.token;
        console.log("Login successful. Token:", token);
        dispatch(setToken(token));
        dispatch(setAdmin(true));
        navigate("/admhome");
      } else {
        console.error("Login failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const loginUser = async (accessKey, email, password) => {
    try {
      const response = await axios.post(`${baseUrl}/users/login`, {
        accessKey,
        email,
        password,
      });
      const { status, message, data } = response.data;

      if (status === "success") {
        console.log(data);
        const token = data.token;
        const id = data.userId;
        dispatch(setUserToken(token));
        setName(data.username);
        dispatch(setUserid(id));
        setName(data._id);

        console.log("Login successful. Token:", token);
        Swal.fire({
          title: "Success!",
          text: "Login Successfull",
          color: "black",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
          toast: true,
          position: "center",
        });
        navigate("/home");
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Login Failed",
          icon: "error",
          showConfirmButton: false,
          timer: 3000,
          toast: true,
          position: "center",
        });
        console.error("Login failed. Message:", message);
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error in the server side. Please Try again later",
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        position: "center",
      });
      console.error(`token${apiKey}`, error.message);
    }
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <form onSubmit={tologin}>
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '185px'}} alt="logo" /> */}
                <h4 className="mt-1 mb-5 pb-1">We are The Team EM</h4>
              </div>

              <p>Please login to your account</p>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="email"
                type="email"
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="password"
                type="password"
                required
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2">
                  Sign in
                </MDBBtn>
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <Link to={"/"}>
                  <MDBBtn outline className="mx-2" color="danger">
                    Register
                  </MDBBtn>
                </Link>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just an Electric</h4>
                <p className="small mb-0">
                  EMotorad (EM) is an electric vehicle company that strives to
                  bring futuristic ebikes at an affordable price for adventure
                  seekers, daily commuters, or casual riders.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
}

export default Login;
