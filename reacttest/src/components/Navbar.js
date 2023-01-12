import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    {/* <img src={Logo} alt="Logo" style={{width:'100px'}}/> */}
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Summary</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/actionitems">ActionItems</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/appointments">Appointments</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/documents">Documents</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
      </li>
      
     
      
    </ul>
  </div>
</nav>
  </>;
};

export default Navbar;
