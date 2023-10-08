import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import CarouselWithTimer from '../components/resuablecomponent/timer.jsx'; // Import the reusable component

function PCSR1() {
  const images = [
    {
      src: 'https://assets.ajio.com/cms/AJIO/WEB/SBI-1440x128%20without%20cta.jpg',
      alt: 'Image 1',
    },
    {
      src: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03102023-AllianceStripsStatic-Z1-payupto1.jpg',
      alt: 'Image 2',
    },
    {
      src: 'https://assets.ajio.com/cms/AJIO/WEB/21092023-paytm-1440x128%202.jpg',
      alt: 'Image 3',
    },
    {
      src: 'https://assets.ajio.com/cms/AJIO/WEB/21092023-mob-1440x128%202.jpg',
      alt: 'Image 4',
    },
  ];

  return (
    <div>
      <CarouselWithTimer images={images} interval={3000} />
    </div>
  );
}

export default PCSR1;
