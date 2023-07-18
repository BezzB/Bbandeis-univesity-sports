import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BiSolidCart } from "react-icons/bi";
import { PiSignInBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const state = useSelector((state)=>state.handleCart)
  return (
    <>
    <nav
      className="navbar fixed-top sticky-top navbar-expand-sm bg-body-tertiary bg-dark py-1 shadow-sm"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to ="/">
          <img
            src="hairlogo.PNG"
            alt="Trendiz-Hair"
            width="300"
            height="40"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to ="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="buttons">
            <Link to="/login" className="btn btn-outline-light">
              <AiOutlineLogin className="me-1" /> Login
            </Link>
            <Link to="/register" className="btn btn-outline-light ms-2">
              <PiSignInBold className="me-1" /> Register
            </Link>
            <Link to ="/cart" className="btn btn-outline-light ms-2">
              <BiSolidCart className="me-1" /> Cart ({state.length})
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </>
    
  );
};

export default Navbar;
