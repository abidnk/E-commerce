import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import './Categories.css'
import Category from '../../assets/img/Categories/Screenshot from 2023-11-02 09-45-14.png'
alt='...'
import { Link } from 'react-router-dom';
export default function Categories() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-1 mt-5 ms-5 ' >
        <Link to='/xfactor'>
      <MDBCol>
        
        <MDBCard className='h-100 category_card'style={{ width: '300px' }}>
          <MDBCardImage
            src={Category}
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      </Link>
      <Link to='/desire'>
      <MDBCol>
        <MDBCard className='h-100 category_card'style={{ width: '300px' }}>
          <MDBCardImage
            src='src/assets/img/Categories/Screenshot from 2023-11-02 09-45-27.png'
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      </Link>
      <Link to='/elite'>
      <MDBCol>
        <MDBCard className='h-100 category_card 'style={{ width: '300px' }}>
          <MDBCardImage
            src='src/assets/img/Categories/Screenshot from 2023-11-02 11-46-12.png'
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      </Link>
    </MDBRow>
  );
}