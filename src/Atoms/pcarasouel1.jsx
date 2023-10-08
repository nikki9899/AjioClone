import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import CarouselWithTimer from '../components/resuablecomponent/timer.jsx'; // Import the reusable component

function PCSR2() {
  const images = [
    {
      src: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03102023-AllianceStripsStatic-Z1-ShopEarn2.jpg',
      alt: 'Image 1',
    },
    {
      src: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-WalletOffer-InviteYourFriend.jpg',
      alt: 'Image 2',
    },
    {
      src: 'https://assets.ajio.com/cms/AJIO/WEB/2192023-PLPStrip-RelianceOne-Points-1440x128.jpg',
      alt: 'Image 3',
    },
  ];

  return (
    <div>
      <CarouselWithTimer images={images} interval={3000} />
    </div>
  );
}

export default PCSR2;

  