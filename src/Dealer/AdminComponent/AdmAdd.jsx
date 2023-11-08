import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { MDBRow,
  MDBCol,
  MDBBtn, 
  MDBInput,
   } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

const AdmAdd = () => {
    const [productname, setProductname] = useState("");
    const [productprice, setProductprice] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    const selectData = (state) => state.products;
    const productsObject = useSelector(selectData);
    const prd = productsObject?.CardProduct;
    console.log(prd);

   
    return(
        <>
        <div>
        <MDBRow className="g-0 bg-light position-relative ">
          <MDBCol md="6" className="mb-md-0 p-md-4">
            <img
              src="src/assets/img/X-factor/X1.png"
              className="w-50"
              alt="..."
            />
          </MDBCol>
          <MDBCol
            md="5"
            className="p-6 ps-md-6 d-flex align-items-center justify-content-center"
            id="view-right"
          >
            <div className="viewright-down">
              <div>
                <label>PRODUCT NAME</label>
                <MDBInput
                  type="text"
                  label="PRODUCT NAME"
                  onChange={(e) => setProductname(e.target.value)}
                />
              </div>
              <div>
                <label>AMOUNT</label>
                <MDBInput
                  type="number"
                  label="AMOUNT"
                  onChange={(e) => setProductprice(e.target.value)}
                />
              </div>

              <div>
                <label>Image</label>
                <MDBInput
                  type="text"
                  label="IMAGE"
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div>
                <MDBBtn size="sm" rounded color="link" onClick={()=>{additem()}}>
                  ADD PRODUCT
                </MDBBtn>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      </>


    )


}
export default AdmAdd;