import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Support() {
  return (
    <div>
      <Nav />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <p className="h3 font-weight-bold center"> support page</p>
        </div>
      </div>

      <div className="container mb-5">
        {/* Fequently asked questions */}
        <div className="accordion container mt-5" id="accordionExample">
          <h3 className="text-center mt-5 mb-5 font-weight-bold">
            Frequently Asked Questions
          </h3>
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link text-dark"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  When will i recieve the cash?
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                After a successful transaction, you'll recieve your cash within
                5 MINUTES
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed text-dark"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What are your fees
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Our fees ranges depending on the service. But we charge 10%
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed text-dark"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How do i convert airtime to cash?
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>
                  Follow these simple steps <br />
                  -------------------------- <br />
                  1. Create an account
                  <br />
                  2. Login to your dashboard
                  <br />
                  3. Once logged in, you'll see a CONVERT Airtime2cash button.{" "}
                  <br />
                  And that's it
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
            <p className="h3 font-weight-bold">We're Social</p>
          <i className="h3 p-3 fa fa-facebook"></i>
          <i className="h3 p-3 fa fa-twitter"></i>
          <i className="h3 p-3 fa fa-linkedin"></i>
        </div>
      </div>
      <Footer />
    </div>
  );
}
