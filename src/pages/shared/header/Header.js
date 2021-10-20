import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../image/logo1.png';
import useAuth from '../../../context/UseAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const { user, Logout } = useAuth();
  return (
    <>
      <Navbar className="navbar" variant="dark" sticky="top" expand="lg"se>
        <Container>
          <Navbar.Brand href="#home">
            <img className="imge" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#trainer">Trainer</Nav.Link>
            <Nav.Link as={HashLink} to="/home#pack">Package</Nav.Link>
            <Nav.Link as={Link} to="/aboutus#aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to="/gallery#gallery">Gallery</Nav.Link>
            {
              user?.displayName ? 
                <button className='nav-btn' onClick={Logout}>Log Out</button>
              : <Nav.Link as={Link} to="/login">SignIn</Nav.Link>}
            <Navbar.Text>
              <p className="mt-3">Signed in as: {user?.displayName}</p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;