import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Trainer.css'

const Trainer = () => {
  return (
    <div className="trainer">
      <Container>
        <Row lg={4} md={2} xs={1} className="desi">
          <Col>
            <div className="font-a"><i className="far fa-laugh fa-3x"></i></div>
            <h1 style={{ color: "#513125" }}>950 +</h1>
            <h6 style={{ color: '#CBC9C8' }}>Happy Clients</h6>
          </Col>
          <Col>
            <div className="font-a"><i className="fab fa-canadian-maple-leaf fa-3x"></i></div>
            <h1 style={{ color: "#513125" }}>12 +</h1>
            <h6 style={{ color: '#CBC9C8' }}>Years Experience</h6>
          </Col>
          <Col>
            <div className="font-a"><i className="far fa-user fa-3x"></i></div>
            <h1 style={{ color: "#513125" }}>125 +</h1>
            <h6 style={{ color: '#CBC9C8' }}>Expert Trainers</h6>
          </Col>
          <Col>
            <div className="font-a"><i className="far fa-comments fa-3x"></i></div>
            <h1 style={{ color: "#513125" }}>54 +</h1>
            <h6 style={{ color: '#CBC9C8' }}>Total Branch</h6>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row xs={1} md={1} lg={2}>
          <Col>
            <div className="about-top">
              <div className='left-line'></div>
              <div><h5 style={{ color: "#C5866F" }}>OUR TRAINER</h5></div>
              <div className="right-line"></div>
            </div>
            <h1 style={{ color: "#5E4034",marginBottom:"20px" }}>Talented trainers from all over the world</h1>
            <p style={{ color: "##BABFC8" }}>We at AKLEYA provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.</p>
            <button className="purchase-btn">See More <i className="fas fa-arrow-right"></i></button>
          </Col>
          <Col>
            <Row xs={1} md={2}>
              <Col className="">
                <Card className="cc">
                  <img className='trainer-img' src="http://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-74M95XX-1024x1024.jpg" alt="" />
                  <h4 style={{ color: "#BA8C66" }}>Natalie Kim</h4>
                  <h6 style={{ marginBottom: '30px', color: "#BFBDBD" }}>Trainer</h6>
                  <div className="fa-fonts">
                    <span><i className="fab fa-facebook-f"></i></span>
                    <span><i className="fab fa-twitter"></i></span>
                    <span><i className="fab fa-pinterest-p"></i></span>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="cc">
                  <img className='trainer-img' src="http://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-2S2SDH3-1024x1024.jpg" alt="" />
                  <h4 style={{ color: "#BA8C66" }}>Jenny Owen</h4>
                  <h6 style={{ marginBottom: '30px', color: "#BFBDBD" }}>Trainer</h6>
                  <div className="fa-fonts">
                    <span><i className="fab fa-facebook-f"></i></span>
                    <span><i className="fab fa-twitter"></i></span>
                    <span><i className="fab fa-pinterest-p"></i></span>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trainer;