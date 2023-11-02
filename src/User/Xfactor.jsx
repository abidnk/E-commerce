
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Xfactor = () => {
    const selectData = (state) => state.product;
  const productsObject = useSelector(selectData);
  const prd = productsObject?.CardProduct;
 
    const data =prd.filter((item) => item.type==="X-factor")
    console.log(data);
    return (
<>
      
      <div className="view container mt-5" >
      <h1>Our X-Factor Ebike Range</h1>
        {data.map((item) => (
          <div key={item.id}>
            <div>
              <MDBRow className="g-0 bg-light position-relative">
                <MDBCol md="6" className="mb-md-0 p-md-4">
                  <img src={item.src} className="img-fluid" alt="..." />
                </MDBCol>

                <MDBCol
                  md="5"
                  className="p-6 ps-md-6 d-flex align-items-center justify-content-center"
                  id="view-right"
                >
                  <div className="viewright-down bg-">
                    <h1 className="mt-0">{item.name} </h1>
                    <h2>Rs{item.price}</h2>
                    <p>{item.discription}</p>

                    <div className="contu">
                      <div>
                        <span role="img" aria-label="star">
                          ⭐️⭐️⭐️⭐️⭐️ (276+ user Ratings)
                        </span>
                        
                      </div>

                      <MDBCol
                        lg="4"
                        md="6"
                        className="md-6 d-inline-flex"
                      ></MDBCol>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        ))}
      </div>
      <MDBCardImage
        className="ms-0 img-fluid"
        src=""
      />

     
    </>
      );
    };
    export default Xfactor;