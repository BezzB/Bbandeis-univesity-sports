import React, { useState } from "react";
import { BiSolidCart } from "react-icons/bi";
import {NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Login from "./buttons/Login";
import Register from "./buttons/Register";
import "./Navbar.css"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const cartState = useSelector((cartState) => cartState.handleCart);
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
            <img src="hairlogo.PNG" alt="Trendiz-Hair" width="300" height="40" />
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
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="active" to="/products" onClick={toggleNavbar}>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="active" to="/about" onClick={toggleNavbar}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="active" to="/contact" onClick={toggleNavbar}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="container-buttons">
              <div className="buttons">
              <Login />
              <Register />
              <NavLink to="/cart" className="btn btn-outline-light mx-1">
                <BiSolidCart className="me-1" /> Cart ({cartState.length})
              </NavLink>
            </div>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
