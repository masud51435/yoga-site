import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
  return (
    <>
      <Carousel className="banner">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kriyawp.wpengine.com/wp-content/uploads/2016/07/bg3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>AELKYA YOGA</h3>
            <p>Your life of Yoga
              with
              AELKYA.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kriyawp.wpengine.com/wp-content/uploads/2016/07/bg1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>The yoga pose you avoid the most you need the most</h3>
            <p>“We all wish for world peace, but world peace will never be achieved unless we first establish peace within our own minds.” ― Geshe Kelsang Gyatso</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kriyawp.wpengine.com/wp-content/uploads/2016/07/bg2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Yoga is a mirror to look at ourselves from within</h3>
            <p>Yoga is a great practice for both the body and the mind, it offers peace and mindfulness to its lovers and helps them get through daily stress. Therefore, we have compiled for you some of the most amazing yoga quotes to keep you motivated and excited to get on the mat.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;