import React, { Component } from "react";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import InfoBox from "./InfoBox";
import Nav from "./Nav";
import Fade from "react-reveal/Fade";
import stock_img from "../images/stock_img.jpg";
import laptop_img from "../images/laptop_stock.png";
import artboard_img from "../images/artboard.png";
import instructions_img from "../images/instructions.svg";
import ledger_img from "../images/ledger.svg";
import mortarboard_img from "../images/mortarboard.svg";
import presentation_img from "../images/presentation.svg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <InfoBox />
        <Fade right>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <p className="mb-5">Logo</p>
              <p className="h3 font-weight-bold mb-5">
                A POWERFUL PLATFORM JUST FOR YOU
              </p>
              <div className="row">
                <div className="col-xl-4">
                  <LoginForm />
                </div>
              </div>

              <div className="mt-5 text-center">
                <p className="h3">
                  1500 <i className="fa fa-plus"></i>
                </p>
                <p className="text-success h4">Traders paid recently</p>
              </div>
            </div>
          </div>
        </Fade>

        <div className="container mb-7">
          <div className="row">
            <Fade left>
              <div className="col-xl-8">
                <img
                  src={stock_img}
                  width="600px"
                  height="400px"
                  className="card-img-top mt-3 mb-3"
                  alt="stock_img"
                />
              </div>
            </Fade>
            <div className="col-xl-4">
              <p className="h3">Why trade elsewhere?</p>
              <p className="text-muted">
                Stay on top of the market with our award-winning trader
                experience.
              </p>
              <a
                href="/"
                className="btn btn-success pl-5 pr-5 text-white font-weight-bold shadow"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div className="container mb-7">
          <div className="row">
            <div className="col-xl-6">
              <p className="h3">
                Take on the market with our powerful platforms
              </p>
              <p className="text-muted">
                Trade without trade-offs. Our desktop, web, and mobile platforms
                are designed for performance and built for all levels of
                investors.
              </p>
              <a
                href="/"
                className="btn btn-success text-white font-weight-bold pl-5 pr-5 shadow"
              >
                Start now
              </a>
            </div>
            <Fade top>
              <div className="col-xl-6">
                <img
                  src={laptop_img}
                  width="600px"
                  height="400px"
                  className="card-img-top mt-3 mb-3"
                  alt="laptop_img"
                />
              </div>
            </Fade>
          </div>
        </div>

        <div className="container mb-7">
          <div className="row">
            <Fade left>
              <div className="col-xl-6">
                <img
                  src={artboard_img}
                  width="600px"
                  height="400px"
                  className="card-img-top mt-3 mb-3"
                  alt="artboard"
                />
              </div>
            </Fade>
            <div className="col-xl-6">
              <p className="h3">Free and open market education</p>
              <p className="text-muted">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>
              <a href="/" className="btn text-success">
                Trading Q&A <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="container mb-7">
            <p className="h3 text-center">Why choose us?</p>
            <div className="row text-center mt-5">
              <div className="col-xl-3">
                <img
                  src={mortarboard_img}
                  className="card-img-top"
                  width="100px"
                  height="100px"
                  alt="mortarboard"
                />
                <p className="h5 mt-3">Education</p>
                <p className="text-muted">Professional coaching from gurus</p>
              </div>
              <div className="col-xl-3">
                <img
                  src={presentation_img}
                  className="card-img-top"
                  width="100px"
                  height="100px"
                  alt="presetation"
                />
                <p className="h5 mt-3">Value</p>
                <p className="text-muted">2,300+ comission-free ETF's</p>
              </div>
              <div className="col-xl-3">
                <img
                  src={ledger_img}
                  className="card-img-top"
                  width="100px"
                  height="100px"
                  alt="ledger"
                />
                <p className="h5 mt-3">Pricing</p>
                <p className="text-muted">Comission free online trading</p>
              </div>
              <div className="col-xl-3">
                <img
                  src={instructions_img}
                  className="card-img-top"
                  width="100px"
                  height="100px"
                  alt="instructions"
                />
                <p className="h5 mt-3">Support</p>
                <p className="text-muted">Dependable, Professional sevice</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container text-center mb-7">
            <p className="h3">Open an investment account</p>
            <p className="text-muted">
              Excellent platforms and apps · ₹0 investments and flat ₹20
              intraday and F&O trades.
            </p>
            <a
              href="/"
              className="btn btn-success pl-5 pr-5 text-white font-weight-bold shadow"
            >
              Sign up now
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
