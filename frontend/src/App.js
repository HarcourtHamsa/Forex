import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Error404 from "./components/Error404";
import Support from "./components/Support";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/support" component={Support} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}
