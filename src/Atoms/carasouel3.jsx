import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

import CarouselWithTimer from '../components/resuablecomponent/timer.jsx';

function CSR3() {
  const images = [
    {
      src: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05102023-TopBrandBanner-Z3-P1-exclusivebrands-min40.jpg',
      alt: 'Image 1',
    },
    {
      src: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05102023-TopBrandBanner-Z3-P2-pumacrocs-min30.jpg',
      alt: 'Image 2',
    },
    {
      src: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05102023-TopBrandBanner-Z3-P4-Puma-min40.jpg',
      alt: 'Image 3',
    },
  ];

  return (
    <div>
      <CarouselWithTimer images={images} interval={3000}  />
    </div>
  );
}

export default CSR3;

