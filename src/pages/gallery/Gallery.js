import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css'

const Gallery = () => {
  return (
    <div className="top-gallery">
      <Container>
        <Col className="top-gall">
        <h1 style={{ color: "#484338" }}>Gallery</h1>
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
                <img className="img" src="https://kriyawp.wpengine.com/wp-content/uploads/2016/04/floral-decor@2x.png" alt="" />
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
        <p>We at AELKYA provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.</p>
        </Col>
        <Row xs={1} lg={4} className="py-5">
          <Col className="memory">
            <h1 className="mt-4" style={{ color: "#484338" }}>Memories</h1>
            <div className="tex">
            <div className='dots-lines'>
                <div>
                  <div className="dots"></div>
                </div>
                <div>
                  <div className="lines"></div>
                </div>
            </div>
            </div>
            <p>We at KRIYA provide various services to the nature of the clients. Wish how you would like to spend the time here we can talk and come to a conclusion.</p>
            <button className="purchase-btn">VIEW GALLERY</button>
          </Col>
          <Col>
            <img className="img1 img-fluid" src="https://kriyawp.wpengine.com/wp-content/uploads/2016/06/gallery1.jpg" alt="" />
          </Col>
          <Col>
            <img className="img3  img-fluid" src="https://kriyawp.wpengine.com/wp-content/uploads/2014/01/gallery3.jpg" alt="" />
            <img className="img2 img-fluid" src="https://kriyawp.wpengine.com/wp-content/uploads/2014/01/gallery2.jpg" alt="" />
          </Col>
          <Col>
          <img className="img4 img-fluid" src="https://kriyawp.wpengine.com/wp-content/uploads/2014/01/gallery4.jpg" alt="" />
          <img className="img4 img-fluid" src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;