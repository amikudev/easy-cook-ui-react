import React from "react";

import classes from "./Sidebar.module.scss";
import SelectedRecipeList from "./selected-recipe-list/SelectedRecipeList";
import RecipeSearch from "./recipe-search/RecipeSearch";

export default class SideBar extends React.Component {
  render() {
    return (
      <div className={classes.sideBar}>
        <SelectedRecipeList></SelectedRecipeList>
        <RecipeSearch></RecipeSearch>
      </div>
    );
  }
}
