import React from "react";
import laptop_img from "../images/laptop_stock.png";
import Nav from "./Nav";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Nav />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <p className="h3 font-weight-bold center">About Us</p>
        </div>
      </div>

      <div className="row container">
        <div className="col-xl-6">
          <p className="h3 font-weight-bold">Who are we?</p>
          <p className="text-muted">
            I have read and agree to SeedInvest's Terms of Use and Privacy
            Policy. I furthermore acknowledge that Issuers that successfully
            raise on SeedInvest may pay affiliates of SeedInvest fees in the
            form of cash or securities. (Learn more on our FAQs.) I have read
            and agree to SeedInvest's Terms of Use and Privacy Policy. I
            furthermore acknowledge that Issuers that successfully raise on
            SeedInvest may pay affiliates of SeedInvest fees in the form of cash
            or securities. (Learn more on our FAQs.)
          </p>
        </div>
        <div className="col-xl-6">
          <img
            src={laptop_img}
            width="600px"
            height="400px"
            className="card-img-top mt-3 mb-3"
            alt="laptop_img"
          />
        </div>
      </div>

      <div className="p-3 mt-5 mb-5">
        <p className="h3 font-weight-bold">Join the winning team</p>
        <a className="btn btn-success shadow text-white font-weight-bold">
          invest with us!
        </a>
      </div>
      <Footer />
    </div>
  );
}
