import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import img from '../image/logo1.png'

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row xs={1} md={2} lg={2} className="g-5">
          <Col>
            <img className="footer-img" src={img} alt="" />
            <p style={{color:"white", marginBottom:"20px"}}>We at AKLEYA provide various services to the nature of the clients</p>
          </Col>

          <Col>
            <Row xs={1} md={2} lg={2} className="g-5">
              <Col style={{color:"white", marginBottom:"20px"}} className="touch">
                <h3 className="mb-5">Get In Touch</h3>
                <h6> <i className="fas fa-map-marked-alt"></i>  140 Hope Street, Plano</h6>
                <h6> <i className="fas fa-envelope-open-text"></i>  anymail@mail.com</h6>
                <h6> <i className="fas fa-phone-alt"></i>  +1 234 567 890</h6>
                <h6> <i className="far fa-clock"></i>  09.00 AM - 17.00 PM</h6>
              </Col>
              <Col style={{color:"white", marginBottom:"40px"}} className="links">
              <h3 className="mb-5">Quicklinks</h3>
              <h6 >About</h6>
              <h6>Services</h6>
              <h6>Trainer</h6>
              <h6>Package</h6>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row xs={1} md={2} lg={2}>
          <Col className="text-white mb-3">Copyright © 2021 HIMU Project</Col>
          <Col className='text-white foot-icon'>
            <span><i className="fab fa-facebook fa-lg"></i></span>
            <span><i className="fab fa-youtube fa-lg"></i></span>
            <span><i className="fab fa-twitter-square fa-lg"></i></span>
            <span><i className="fab fa-instagram-square fa-lg"></i></span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;