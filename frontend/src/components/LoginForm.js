import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    isAuthenticated: false,
    userStatus: "",
    users: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then(result => this.setState({ users: result.data }))
      .catch(err => console.log(err));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { users, email } = this.state;

    users.map(user => {
      return user.emailaddress === email 
        ? this.setState({ isAuthenticated: true })
        : console.log("Logged out");
    });
  };
  render() {
    if (this.state.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <div>
          <div className="card" style={{ background: "transparent" }}>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-control-group">
                  <input
                    className="form-control mb-3"
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                  <input
                    className="form-control mb-3"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />

                  <button
                    type="submit"
                    className="btn btn-success pl-5 pr-5 font-weight-bold"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
