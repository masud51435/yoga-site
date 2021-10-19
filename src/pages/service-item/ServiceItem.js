
import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceItem.css';

const ServiceItem = () => {
  let { serviceId } = useParams();
  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState([]);
  console.log(items);
  console.log(serviceId);
  useEffect(() => {
    fetch('/Services.json')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);
  
  useEffect(() => {
    const foundItem = items.find(item => item.id == serviceId)
    setSingleItem(foundItem)
  }, [items]);

  return (
    <div>
      <Container className="centers my-5">
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={singleItem?.img} />
  <Card.Body>
            <Card.Title>{singleItem?.name}</Card.Title>
    <Card.Text><i className="far fa-clock"></i>  
     {singleItem?.time}
    </Card.Text>
    <Card.Text>Open:  
      {singleItem?.open}
    </Card.Text>
    <Card.Text>
     {singleItem?.title}
    </Card.Text>
    <Link to="/services"><Button variant="primary">Go Back</Button></Link>
  </Card.Body>
</Card>
      </Container>
    </div>
  );
};

export default ServiceItem;