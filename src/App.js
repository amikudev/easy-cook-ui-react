import React from "react";
import EasyCookingApp from "./easy-cooking-app/EasyCookingApp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";

export default class App extends React.Component {
  render = () => {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <EasyCookingApp />
          </Route>
        </Switch>
      </Router>
    );
  };
}
