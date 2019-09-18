import React from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

//component
import Login from "./components/login";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/friends";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/myfriends">My Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/myfriends" component={Friends} />
          <Route path="/login" component={Login} />
          {/* <Route component={Login} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
