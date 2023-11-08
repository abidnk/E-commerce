import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setToken } from "../../redux/ProdctSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

const dispatch = useDispatch()

  const login = async (event) => {
    event.preventDefault()
    const email = event.target.form1.value
    console.log(email)
    const password = event.target.form2.value
  
    
    try {
      const response = await axios.post(
        "https://ecommerce-api.bridgeon.in/login",
        {
          email,
          password,
        }
      );
      const { status, message, data } = response.data;
      if (status === "success") {
        const token = data.token;
        dispatch(setToken(token))
        console.log("Login successful. Token:", token);
        navigate('/admhome')
      } else {
        console.error("Login failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <form onSubmit={login}>
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
                id="form1"
                type="email"
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
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
                <MDBBtn outline className="mx-2" color="danger">
                  Danger
                </MDBBtn>
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

// import React from 'react';
// import {
//   MDBModal,
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBInput
// }
// from 'mdb-react-ui-kit';

// function LoginModal() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <MDBModal isOpen={isOpen} setIsOpen={setIsOpen} centered>
//       <MDBContainer className="my-5 gradient-form">

//         <MDBRow>

//           <MDBCol col='6' className="mb-5">
//             <div className="d-flex flex-column ms-5">

//               <div className="text-center">
//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
//                   style={{width: '185px'}} alt="logo" />
//                 <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
//               </div>

//               <p>Please login to your account</p>

//               <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
//               <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

//               <div className="text-center pt-1 mb-5 pb-1">
//                 <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
//                 <a className="text-muted" href="#!">Forgot password?</a>
//               </div>

//               <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
//                 <p className="mb-0">Don't have an account?</p>
//                 <MDBBtn outline className='mx-2' color='danger'>
//                   Danger
//                 </MDBBtn>
//               </div>

//             </div>

//           </MDBCol>

//           <MDBCol col='6' className="mb-5">
//             <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

//               <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//                 <h4 class="mb-4">We are more than just an Electric</h4>
//                 <p class="small mb-0">EMotorad (EM) is an electric vehicle company that strives to bring
//                 futuristic ebikes at an affordable price for adventure seekers, daily commuters,
//                or casual riders.
//               </p>
//             </div>

//           </div>
//           </MDBCol>

//         </MDBRow>

//       </MDBContainer>
//     </MDBModal>
//   );
// }

// export default LoginModal;

// import React from 'react';
// import {
//   MDBModal,
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBInput
// }
// from 'mdb-react-ui-kit';

// function LoginModal() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <MDBModal isOpen={isOpen} setIsOpen={setIsOpen} centered>
//       <MDBContainer className="my-5 gradient-form">

//         <MDBRow>

//           <MDBCol col='6' className="mb-5">
//             <div className="d-flex flex-column ms-5">

//               <div className="text-center">
//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
//                   style={{width: '185px'}} alt="logo" />
//                 <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
//               </div>

//               <p>Please login to your account</p>

//               <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
//               <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

//               <div className="text-center pt-1 mb-5 pb-1">
//                 <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
//                 <a className="text-muted" href="#!">Forgot password?</a>
//               </div>

//               <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
//                 <p className="mb-0">Don't have an account?</p>
//                 <MDBBtn outline className='mx-2' color='danger'>
//                   Danger
//                 </MDBBtn>
//               </div>

//             </div>

//           </MDBCol>

//           <MDBCol col='6' className="mb-5">
//             <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

//               <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//                 <h4 class="mb-4">We are more than just an Electric</h4>
//                 <p class="small mb-0">EMotorad (EM) is an electric vehicle company that strives to bring
//                 futuristic ebikes at an affordable price for adventure seekers, daily commuters,
//                or casual riders.
//               </p>
//             </div>
//             </div>
//           </MDBCol>

//         </MDBRow>

//       </MDBContainer>
//     </MDBModal>
//   );
// }

// export default LoginModal;
