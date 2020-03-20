import React, { Component } from "react";

export default class Greeting extends Component {
  state = {
    date: new Date().getHours()
  };

  getTime() {
    const time = this.state.date;
    if (time >= 17) {
      return "Good Evening Boss!";
    } else if (time >= 12) {
      return "Good Afternoon Boss!";
    } else {
      return "Good Morning Boss!";
    }
  }

  render() {
    return <div className="h4 font-weight-bold">{this.getTime()}</div>;
  }
}
