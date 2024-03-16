import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCaroselData';

const MainCarosel = () => {
    const items = mainCarouselData.map((item) => <img src={item.image} role='presentation' 
    className='cursor-pointer' alt=""/>)
  return  <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite={true}
    />
};

export default MainCarosel;