import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import feast from '../assets/img/feast.jpg';
import primebanner from '../assets/img/PrimeBanner.webp'
import '../assets/css/Slideshow.css';
import bannergrocery from "../assets/img/bannergrocey.jpg"

const Slideshow = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
      >
      <div className="slide">
        <img src={bannergrocery} alt="Slide 1" />
      </div>
      <div className="slide">
      <img src={primebanner} alt="Slide 2" />
      </div>
      <div className="slide">
        <img src={feast} alt="Slide 3" />
      </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
};

export default Slideshow;
