import React from 'react';
import './CSS/Login.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Login(props) {
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

      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              <a href="#"><Link to="/register">You Don't Have account?</Link></a>
            </p>
            <p className="forgot-password text-right mt-2">
              <a href="#"><Link to="/forget">Forgot password?</Link></a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
