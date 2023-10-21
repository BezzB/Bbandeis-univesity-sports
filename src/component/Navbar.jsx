import React, { useState } from "react";
import {NavLink } from "react-router-dom";
import Login from "./buttons/Login";
import "./Navbar.css"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => { 
  const [show, setShow] = useState(true);

  const toggleNavbar = () => {
    setShow(!show);
  };

 
  return (
    <>
      <nav
        className="navbar fixed-top sticky-top navbar-expand-sm bg-body-tertiary bg-dark py-1 shadow-sm"
        data-bs-theme="dark"
      >
        <div className="container">
          <NavLink className="navbar-brand text-info" to="/">
            <img src="logonew.PNG" alt="Brandies Sports" width="300" height="40" />
          </NavLink>
          <button
            className="navbar-toggler border border-info text-info"
            onClick={toggleNavbar}>
              
              {show ?  <AiOutlineMenu /> : <AiOutlineClose />}
            </button>
          <div className={show ? "collapse navbar-collapse" : "collapse navbar-collapse active"}>
            <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="active" aria-current="page" to="/" onClick={toggleNavbar}>
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="active" to="/products" onClick={toggleNavbar}>
                  Facilities 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="active" to="/programs" onClick={toggleNavbar}>
                  Programs 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="active" to="/events" onClick={toggleNavbar}>
                  Events 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="active" to="/membership" onClick={toggleNavbar}>
                  Membership
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="active" to="/about" onClick={toggleNavbar}>
                  About Us 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="active" to="/contact" onClick={toggleNavbar}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="container-buttons">
              <div className="buttons">
              <Login />           
             
            </div>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
