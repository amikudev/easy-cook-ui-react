import React from "react";
import classes from "./AppHeader.module.scss";

interface AppHeaderInterface {
  appName: string;
}

const AppHeader: React.FC<AppHeaderInterface> = (props) => {
  return (
    <header className={classes.appHeader}>
      <h2>{props.appName}</h2>
    </header>
  );
};

export default AppHeader;
