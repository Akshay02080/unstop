import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" className='p-4 '>
      <div>
        {/* Your logo or any other content */}
        <img className='rounded-pill' src='https://media.licdn.com/dms/image/D4D0BAQHp7S4VRmVDjQ/company-logo_200_200/0/1681930817507?e=1720656000&v=beta&t=I7tGzwOsM3NSllML0jNbG-4IP-pGeh_MLM-23mwORcA' alt="Company Logo" width="150px" height="90px"/>
      </div>
      <Nav className='ms-auto'>
        <NavLink to="/" className="btn btn-outline-light  m-2">Home</NavLink>
        <NavLink to="/About" className="btn btn-outline-light  m-2">About</NavLink>
        <NavLink to="/Contact" className="btn btn-outline-light m-2">Contact</NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
