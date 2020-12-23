import React from "react";

import classes from "./Sidebar.module.scss";
import SelectedRecipeList from "./selected-recipe-list/SelectedRecipeList";
import RecipeSearch from "./recipe-search/RecipeSearch";
import exp from "constants";

const SideBar: React.FC = () => {
  return (
    <div className={classes.sideBar}>
      <SelectedRecipeList></SelectedRecipeList>
      <RecipeSearch></RecipeSearch>
    </div>
  );
};

export default SideBar;
