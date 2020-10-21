import React from "react";
import AppHeader from "./app-header/AppHeader";

import styles from "./EasyCookingApp.module.scss";
import SideBar from "./app-body/recipe-page/sidebar/SiderBar";
import Recipe from "./app-body/recipe-page/recipe/Recipe";

export default class EasyCookingApp extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader appName="Easy Cooking"></AppHeader>
        <main className={styles.appBody}>
          <SideBar />
          <Recipe />
        </main>
      </div>
    );
  }
}
