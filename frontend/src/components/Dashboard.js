import React, { Component } from "react";
import Greeting from "./Greeting";
import DashboardNav from "./DashboardNav";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardNav />
        <div className="container mt-5">
          <Greeting />
          <div>
            <div className="row">
              <div className="col-xl-4">
                <div className="card  p-5 mb-4 border-left-success"></div>
              </div>
              <div className="col-xl-4">
                <div className="card  p-5 mb-4 border-left-success"></div>
              </div>
              <div className="col-xl-4">
                <div className="card p-2 mb-4 border-left-info">
                  <p style={{ color: "orangeRed" }}>Important information</p>
                  <p className="text-muted">
                    {" "}
                    The impacts of COVID-19 and related market volatility have
                    led to increased client inquiries. We created a Top FAQs
                    page that answers your most pressing questions, making it
                    easy for you to stay up-to-date and quickly service your
                    needs online.
                  </p>
                </div>
              </div>
            </div>

            <div className="card mt-5 mb-5 p-5 "></div>

            <p className="font-weight-bold h4">Want to Invest?</p>
            <div className="row mb-5">
              <div className="col-xl-4">
                <form>
                  <div className="form-control-group">
                    <input
                      className="form-control mb-3"
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                    />
                    <input
                      className="form-control mb-3"
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                    />

                    <button
                      type="submit"
                      className=" font-weight-bold btn btn-success"
                    >
                      make investment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
