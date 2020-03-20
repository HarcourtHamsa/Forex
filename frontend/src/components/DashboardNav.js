import React from "react";
import { Link } from "react-router-dom";

export default function DashboardNav() {
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-md navbar-light p-3" id="navbar">
        <Link to="/" className="navbar-brand">
          Logo
        </Link>
        <button
          type="button"
          className="navbar-toggler border-0"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          style={{ color: "black" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ml-auto">
            <Link to="/" className="nav-item nav-link active">
              profile <i className="fa fa-user"></i>
            </Link>

            <Link to="/login" className="nav-item nav-link">
              settings <i className="fa fa-cog"></i>
            </Link>
            <Link to="/login" className="nav-item nav-link">
              Logout <i className="fa fa-power-off"></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
