import React from "react";
import EasyCookingApp from "./easy-cooking-app/EasyCookingApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";
import Login from "./components/Login";
import AppHeader from "./easy-cooking-app/app-header/AppHeader";
import classes from "./App.module.scss";

export default class App extends React.Component {
  render = () => {
    return (
      <div className={classes.App}>
        <div className={classes.AppHeader}>
          <AppHeader appName="Easy Cooking"></AppHeader>
        </div>
        <div className={classes.AppBody}>
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
        </div>
      </div>
    );
  };
}
