import React from 'react';
import { Col } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
  const { id, name, title, img } = props.service;
  return (
    <Col>
      <h3 className='name'>{ name }</h3>
      <img className="service-img" src={img} alt="" />
      <div>
      <div className="dotted"></div>
      </div>
      <div>
      <div className="line"></div>
      </div>
      <p>{title}</p>
      <Link to={`/serviceitem/${id}`}>
      <button className="purchase-btn">See More <i className="fas fa-arrow-right"></i></button>
      </Link>

    </Col>
  );
};

export default Service;