import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import "./AdmNavBar.css"
import { Link } from 'react-router-dom';
export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' sticky  bgColor='black' className='navbar' >
      <MDBContainer fluid>
      <img src="src/assets/img/Screenshot from 2023-11-01 12-53-09.png" alt="Logo" />

        <MDBNavbarToggler
        
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas style={{color:'white'}}/>
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
             
              <MDBNavbarLink style={{color:'white'}} active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
              
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' style={{color:'white'}} role='button'>
                  Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <Link to='/xfactor'><MDBDropdownItem link>X-Factor</MDBDropdownItem></Link>
                  <Link to='/desire'> <MDBDropdownItem link>Desire</MDBDropdownItem></Link>
                 <Link to='/elite'><MDBDropdownItem link >Elite</MDBDropdownItem></Link>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/accessories' style={{color:'white'}}>Accessories</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='BIKE' aria-label='Search' />
            <MDBBtn color='dark'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}