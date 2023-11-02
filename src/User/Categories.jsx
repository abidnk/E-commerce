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
export default function Categories() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-1'>
      <MDBCol>
        <MDBCard className='h-100'style={{ width: '300px' }}>
          <MDBCardImage
            src='src/assets/img/Categories/Screenshot from 2023-11-02 09-45-14.png'
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'style={{ width: '300px' }}>
          <MDBCardImage
            src='src/assets/img/Categories/Screenshot from 2023-11-02 09-45-27.png'
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'style={{ width: '300px' }}>
          <MDBCardImage
            src='src/assets/img/Categories/Screenshot from 2023-11-02 11-46-12.png'
            alt='...'
            position='top'
          />
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}