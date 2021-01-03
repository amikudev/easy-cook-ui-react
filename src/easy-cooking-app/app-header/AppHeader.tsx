import React from "react";
import classes from "./AppHeader.module.scss";

interface AppHeaderInterface {
  appName: string;
}

const AppHeader: React.FC<AppHeaderInterface> = (props) => {
  return (
    <header className={classes.appHeader}>
      <h1 className={classes.appTitle}>{props.appName}</h1>
    </header>
  );
};

export default AppHeader;
