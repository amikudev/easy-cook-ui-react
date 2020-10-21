import React from "react";
import AppHeader from "./app-header/AppHeader";

import styles from "./EasyCookingApp.module.scss";
import SideBar from "./app-body/recipe-page/sidebar/SiderBar";

export default class EasyCookingApp extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader appName="Easy Cooking"></AppHeader>
        <main className={styles.appBody}>
          <SideBar />
        </main>
      </div>
    );
  }
}
