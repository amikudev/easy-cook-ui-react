import React from "react";
import classes from "./AppHeader.module.scss";

export default class AppHeader extends React.Component {
  render() {
    return (
      <header className={classes.appHeader}>
        <h1>{this.props.appName}</h1>
      </header>
    );
  }
}
