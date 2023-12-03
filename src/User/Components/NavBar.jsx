import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBRow,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./NavBar.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProduct, setProducts } from "../../redux/ProdctSlice";
import axios from "axios";
import Swal from "sweetalert2";
import { selectToken } from "../../redux/AuthSlice";
import logo from "../../assets/img/Screenshot from 2023-11-01 12-53-09.png";
export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  const [searchTerm, setSerchTerm] = useState("");
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const [updatedProductData, setUpdatedProductData] = useState(null);
  const dealerToken = token;
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const getAllProducts = async (token) => {
    try {
      const response = await axios.get(
        `${baseUrl}/products?accessKey=${apiKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { status, message, data } = response.data;
      if (status === "success") {
        dispatch(setProducts(data));
        console.log("Fetched products:", data);
      } else {
        console.error("Product retrieval failed. Message:", message);
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
  useEffect(() => {
    getAllProducts(dealerToken);
  }, [updatedProductData]);

  return (
    <>
      <MDBNavbar expand="lg" sticky bgColor="black" className="navbar">
        <MDBContainer fluid>
          <img src={logo} alt="Logo" />

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas style={{ color: "white" }} />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <Link to={"/home"}>
                  <MDBNavbarLink
                    style={{ color: "white" }}
                    active
                    aria-current="page"
                  >
                    Home
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link"
                    style={{ color: "white" }}
                    role="button"
                  >
                    Categories
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <Link to="/xfactor">
                      <MDBDropdownItem link>X-Factor</MDBDropdownItem>
                    </Link>
                    <Link to="/desire">
                      {" "}
                      <MDBDropdownItem link>Desire</MDBDropdownItem>
                    </Link>
                    <Link to="/elite">
                      <MDBDropdownItem link>Elite</MDBDropdownItem>
                    </Link>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to={"/accessories"}>
                  <MDBNavbarLink style={{ color: "white" }}>
                    Accessories
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <Link to={"/wishlist"}>
              <MDBIcon
                className="me-3"
                far
                icon="heart"
                style={{ color: "white" }}
              />
            </Link>
            <Link to={"/addtocart"}>
              <MDBIcon
                fas
                className="me-4"
                icon="cart-plus"
                style={{ color: "white" }}
              />
            </Link>
            <form className="d-flex input-group w-auto">
              <input
                onChange={(e) => setSerchTerm(e.target.value)}
                id="searchInput"
                type="search"
                className="form-control"
                placeholder="BIKE"
                aria-label="Search"
              />
              <MDBBtn color="dark">Search</MDBBtn>
            </form>
            <Link to={"/login"}>
              <MDBIcon
                fas
                className="ms-3"
                style={{ color: "white" }}
                icon="sign-out-alt"
              />
            </Link>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {searchTerm ? (
        <div className="main-divv">
          <div className="container mx-5">
            <MDBRow>
              {products
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.title
                      .toLocaleLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => (
                  <div className="search-div" key={val.id}>
                    <p style={{ cursor: "pointer" }}>{val.title}</p>
                  </div>
                ))}
            </MDBRow>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
