import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./Services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);
  return (
    <div className="services" >
      <div className="container py-5">
        <div>
          <h1 style={{color:"#484338"}}>A BRIEF DESCRIPTION ABOUT THE WAYS OF YOGA</h1>
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
          <p>We at ALKEYA provide various services to the nature of the clients. Wish how you would like to spend the <br /> time here we can talk and come to a conclusion.</p>
        </div>
        <Row xs={1} md={2} lg={3} className="g-5 cards">
          {
            services.map(service => <Service
              key={service.id}
              service={service}
            ></Service>)
          }
        </Row>
      </div>
    </div>
  );
};

export default Services;