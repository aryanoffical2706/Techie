import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

const Service = () => {
  return (
    <div className="services">
      <Carousel
      infiniteLoop
      autoPlay
      showArrows={false}
      showStatus={false}
      interval={1000}>
        <div>
          <img src={img3} alt='img3' />
          <p className='legend'>Full Stack</p>
        </div>
        <div>
          <img src={img4} alt='img3' />
          <p className='legend'>One-to-One Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Service;
