import React from "react";
import { render } from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import User from "./js/components/User";
import Contact from "./js/components/Contact";
import Home from "./js/components/Home";
import NotFound from "./js/views/not-found";
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users/:id" component={User} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

render(routing, document.getElementById("root"));
