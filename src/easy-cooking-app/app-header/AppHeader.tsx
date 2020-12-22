import React from "react";
import classes from "./AppHeader.module.scss";

interface AppHeaderInterface {
  appName: string;
}

export default class AppHeader extends React.Component<AppHeaderInterface> {
  render() {
    return (
      <header className={classes.appHeader}>
        <h1>{this.props.appName}</h1>
      </header>
    );
  }
}
