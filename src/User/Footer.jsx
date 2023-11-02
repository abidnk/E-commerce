import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Footer.css'
export default function Footer() {
  return (
    <MDBFooter className='text-white text-center'style={{ backgroundColor: 'black' }} >
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <img src="src/assets/img/Screenshot from 2023-11-01 12-53-09.png" alt="Logo" />

            <p className='footer-content'> 
            EMotorad (EM) is an electric vehicle company that strives to bring futuristic ebikes at an affordable price for adventure seekers, daily commuters, or casual riders.<br/>
            <br/>
            For General Enquires<br/>
            +91 8686050590 | contactus@emotorad.com<br/>
            <br/>
            For Service Related Queries <br/>
            
            +91 8956248161 | service@emotorad.com<br/>
            <br/>
            Address:<br/>
            At post Jambe, Taluka Mulshi, 169/2 Sangawade, Road, Pune, Maharashtra 411033
            Clay Works, Arakere Bannerghatta Rd, Omkar Nagar, Arekere, Bengaluru, Karnataka 560076
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
          <MDBContainer >
        <section >
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
