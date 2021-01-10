import React from "react";

import classes from "./EasyCookingApp.module.scss";
import SideBar from "./app-body/recipe-page/sidebar/SiderBar";
import Recipe from "./app-body/recipe-page/recipe/Recipe";

export default class EasyCookingApp extends React.Component {
  render() {
    return (
      <main className={classes.appBody}>
        <div className={classes.sidebarContainer}>
          <SideBar />
        </div>
        <Recipe />
      </main>
    );
  }
}
