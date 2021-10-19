import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import './Pack.css'

const Pack = () => {
  return (
    <div className="pack">
      <Container>
        <h1 style={{ color: "#484338", paddingTop: "60px" }}>Pick a Yoga Pack</h1>
        <div className="dd">
            <div className="design">
              <div className="dots-lines">
                <div>
                  <div className="dots"></div>
                </div>
                <div>
                  <div className="lines"></div>
                </div>
              </div>
              <div>
                <img className="buddha" src="https://kriyawp.wpengine.com/wp-content/uploads/2016/05/ico-master@2x.png" alt="" />
              </div>
              <div className='dots-lines'>
                <div>
                  <div className="dots"></div>
                </div>
                <div>
                  <div className="lines"></div>
                </div>
              </div>
            </div>
          </div>
        <p style={{marginBottom:"60px"}}>We at KRIYA provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.</p>
        <Row xs={1} md={1} lg={3} className="g-5 rowcard">
          <Col>
            <Card className="card1">
            <h4 style={{color:"#513125",marginBottom:"20px"}}>Regular Class</h4>
            <p style={{color:"gray", marginBottom:"50px"}}>regular class details you can see here.</p>
            <h2 style={{color:"#C47A5E", marginBottom:"20px"}}>$ 40.00 / month</h2>
            <h6 style={{color:"gray"}}> <i class="fas fa-check"></i> Consultation</h6>
            <h6 style={{color:"gray"}}> <i class="fas fa-check"></i> 4 Hours Training</h6>
            <h6 style={{color:"gray"}}> <i class="fas fa-check"></i> Cancel Anytime</h6>
            <h6 style={{color:"gray", marginBottom:"50px"}}> <i class="fas fa-check"></i> No Hidden Fees</h6>
            <button className="regularbtn">Get Started</button>
            </Card>
          </Col>
          <Col>
          <Card className="card2">
            <h4 style={{color:"white",marginBottom:"20px"}}>Medium Class</h4>
            <p style={{color:"white", marginBottom:"50px"}}>medium class details you can see here.</p>
            <h2 style={{color:"white", marginBottom:"20px"}}>$ 55.00 / month</h2>
            <h6 style={{color:"white"}}> <i class="fas fa-check"></i> Consultation</h6>
            <h6 style={{color:"white"}}> <i class="fas fa-check"></i> 4 Hours Training</h6>
            <h6 style={{color:"white"}}> <i class="fas fa-check"></i> Cancel Anytime</h6>
            <h6 style={{color:"white", marginBottom:"50px"}}> <i class="fas fa-check"></i> No Hidden Fees</h6>
            <button className="mediumbtn">Get Started</button>
            </Card>
          </Col>
          <Col>
          <Card className="card3">
          <h4 style={{color:"#513125",marginBottom:"20px"}}>Expert Class</h4>
            <p style={{color:"gray", marginBottom:"50px"}}>expert class details you can see here.</p>
            <h2 style={{color:"#C47A5E", marginBottom:"20px"}}>$ 77.00 / month</h2>
            <h6 style={{color:"gray"}}> <i class="fas fa-check"></i> Consultation</h6>
            <h6 style={{color:"gray"}}> <i class="fas fa-check"></i> 4 Hours Training</h6>
            <h6 style={{color:"gray"}}> <i class="fas fa-check"></i> Cancel Anytime</h6>
            <h6 style={{color:"gray", marginBottom:"50px"}}> <i class="fas fa-check"></i> No Hidden Fees</h6>
            <button className="regularbtn">Get Started</button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pack;