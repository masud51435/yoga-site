import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about" id="aboutus">
      <Container>
        <div className="about-top">
          <div className='left-line'></div>
          <div><h6 style={{ color: "#C78364" }}>ABOUT AELKYA</h6></div>
          <div className="right-line"></div>
        </div>
        <h1 style={{ color: "#513125", marginBottom: "30px" }}>Happiness is a decision, not a destination. Realize it with us!</h1>
        <p>Quisque maximus lacus sem, vitae maximus tortor venenatis in. Ut porttitor velit nec nibh dignissim venenatis. Vestibulum non ex id dolor commodo vestibulum. Nulla dignissim quam et augue consectetur porttitor.</p>
        <button className="purchase-btn">Learn More <i className="fas fa-arrow-right"></i></button>
      </Container>
    </div>
  );
};

export default AboutUs;