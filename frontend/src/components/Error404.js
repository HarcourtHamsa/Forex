import React from "react";
import presentation_img from "../images/presentation.svg";

export default function Error404() {
  return (
    <div>
      <div className="center text-center">
        <img
          src={presentation_img}
          className="card-img-top"
          width="100px"
          height="100px"
          alt="presetation"
        />
        <p className="h3 font-weight-bold">Page Not Found</p>
        <a href="/" className="btn btn-success text-white shadow font-weight-bold">
          visit homepage
        </a>
      </div>
      
    </div>
  );
}
