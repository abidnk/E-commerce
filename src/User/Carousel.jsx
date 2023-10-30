import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel showControls dealy={1000}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='src/assets/img/Screenshot from 2023-10-29 08-16-28.png'
        alt='Pani Pali'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='src/assets/img/Screenshot from 2023-10-29 08-18-36.png'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='src/assets/img/Screenshot from 2023-10-29 08-18-50.png'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='src/assets/img/Screenshot from 2023-10-29 08-19-02.png'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src='src/assets/img/Screenshot from 2023-10-29 08-19-14.png'
        alt='...'
      />
    </MDBCarousel>
  );
}