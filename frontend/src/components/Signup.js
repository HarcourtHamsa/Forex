import React, { Component } from "react";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
import { Redirect } from "react-router-dom";

export default class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    isRegistered: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firstname, lastname, password, email } = this.state;

    axios
      .post("http://localhost:5000/users/add", {
        firstname,
        lastname,
        password,
        email
      })
      .then(this.setState({ isRegistered: true }))
      .catch(err => console.log(err));
  };
  render() {
    if (this.state.isRegistered) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Nav />
        <div className="mt-5 container mb-5">
          <p className="h3">Logo</p>
          <div className="row">
            <div className="col-xl-4  p-5">
              <form onSubmit={this.handleSubmit}>
                <div className="form-control-group">
                  <div className="form-row">
                    <div className="col-xl-6">
                      <input
                        className="form-control mb-3"
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        className="form-control mb-3"
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <input
                    className="form-control mb-3"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                  <input
                    className="form-control mb-3"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <p className="small">
                    {" "}
                    <input className=" mb-3" type="checkbox" />I have read and
                    agree to SeedInvest's Terms of Use and Privacy Policy. I
                    furthermore acknowledge that Issuers that successfully raise
                    on SeedInvest may pay affiliates of SeedInvest fees in the
                    form of cash or securities. (Learn more on our FAQs.)
                  </p>
                </div>

                <button className="btn btn-success font-weight-bold pl-5 pr-5 shadow mt-5">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
