import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import image1 from '../../assets/img/Screenshot from 2023-11-18 14-52-13.png'
import image2 from '../../assets/img/Screenshot from 2023-10-29 08-16-28.png'
import image3 from '../../assets/img/Screenshot from 2023-10-29 08-18-36.png'
import image4 from '../../assets/img/Screenshot from 2023-10-29 08-19-02.png'
import image5 from '../../assets/img/Screenshot from 2023-10-29 08-19-14.png'
import image6 from '../../assets/img/Screenshot from 2023-10-29 08-18-50.png'

export default function Carousel() {
  return (
    <MDBCarousel showControls dealy={1000}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={image1}
        alt='Pani Pali'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={image2}
        alt='Pani Pali'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={image3}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={image4}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={image5}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src={image6}
        alt='...'
      />
    </MDBCarousel>
  );
}