import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

export default function AdmSpinner() {
  return (
    <div className='w-100 h-100 d-flex justify-content-center'>
    <MDBSpinner role='status'>
      <span className=' visually-hidden '>Loading...</span>
    </MDBSpinner>
    </div>
  );
}