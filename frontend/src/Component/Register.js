import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Register() {

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
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary">
                <Link to="/login"> Sign In </Link>

              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group mt-3">
              <label>Re-peat Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default Register;
