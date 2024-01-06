import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
function About() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Link className='link h3' to='/'>Navbar</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link className='link' to='/'>Home</Link></Nav.Link>
            <Nav.Link href="#about"><Link className='link' to='/about'>About</Link></Nav.Link>
            <Nav.Link href="#contact"><Link className='link' to='/contact'>Contact</Link></Nav.Link>
            <Nav.Link href="#login"><Link className='link' to='/login'>Login</Link></Nav.Link>
            <Nav.Link href="#register"><Link className='link' to='/register'>Register</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default About;
