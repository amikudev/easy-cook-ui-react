import React from "react";
import PropTypes from "prop-types";
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

AppHeader.propTypes = {
  appName: PropTypes.string,
};
