import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Benifit.css';


const Benifit = () => {
  return (
    <div className="benifit">
      <Container>
        <h1 style={{color:"#484338"}}>Why AELKYA?</h1>
        <Row className="g-5 roww" sm={1} lg={3}>
          <Col>
            <div className="flex-item ">
              <img className="b-img me-3" src="https://kriyawp.wpengine.com/wp-content/uploads/2016/05/ico-ying-yang@2x.png" alt="" />
              <h4 style={{color:"#484338"}}>COMPLETE VIDEO SUPPORT</h4>
            </div>
            <div>
              <div className="dotted"></div>
            </div>
            <div>
              <div className="line"></div>
            </div>
            <p>Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
          </Col>
          <Col>
            <div className="flex-item">
              <img className="b-img me-3" src="https://kriyawp.wpengine.com/wp-content/uploads/2016/05/ico-stones@2x.png" alt="" />
              <h4 style={{color:"#484338"}}>TONS OF CUSTOMIZATION</h4>
            </div>
            <div>
              <div className="dotted"></div>
            </div>
            <div>
              <div className="line"></div>
            </div>
            <p>Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
          </Col>
          <Col>
            <div className="flex-item">
              <img className="b-img me-3" src="https://kriyawp.wpengine.com/wp-content/uploads/2016/05/ico-cog-wheel@2x.png" alt="" />
              <h4 style={{color:"#484338"}}>EASY TO SETUP</h4>
            </div>
            <div>
              <div className="dotted"></div>
            </div>
            <div>
              <div className="line"></div>
            </div>
            <p>Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
          </Col>
        </Row>
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
        <div>
          <h1 style={{color:"#484338"}}>Creative & most complete yoga / health theme</h1>
          <p>It’s time to roll out your yoga mat and discover the combination of physical and mental exercises that for thousands of years have hooked yoga practitioners around the globe. The beauty of yoga is that you don’t have to be a yogi or yogini to reap the benefits.</p>
          <button className="purchase-btn"> PURCHASE NOW <i className="fas fa-arrow-right"></i></button>
        </div>
      </Container>

    </div>
  );
};

export default Benifit;