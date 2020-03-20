import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
  }
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-light p-3 fixed-top"
        id="navbar"
        style={navStyle}
      >
        <Link to="/" className="navbar-brand">
          Logo
        </Link>
        <button
          type="button"
          className="navbar-toggler border-0"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          style={{color: 'black'}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ml-auto">
            <Link to="/about" className="nav-item nav-link active">
              About
            </Link>
            <Link to="/pricing" className="nav-item nav-link">
              Products
            </Link>
            <Link to="/login" className="nav-item nav-link">
              Pricing
            </Link>
            <Link to="/support" className="nav-item nav-link">
              Support
            </Link>
            <Link
              to="/signup"
              className="nav-item nav-link btn btn-success pl-5 pr-5 font-weight-bold"
              style={{ color: "white" }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

// inline styling
const navStyle = {
  top: "-100px" /* Hide the navbar 50 px outside of the top view */,
  width: "100%" /* Full width */,
  transition: "top 0.1s",
  background: "white" 
};

export default Nav;
