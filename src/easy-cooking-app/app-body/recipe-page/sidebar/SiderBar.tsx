import React from "react";

import classes from "./Sidebar.module.scss";
import SelectedRecipeList from "./selected-recipe-list/SelectedRecipeList";
import RecipeSearch from "./recipe-search/RecipeSearch";
import {
  getSidebarHeight,
  getRecipeSearchComponentHeight,
} from "../../../../utils/layoutCalculations";
import { getSelectedRecipeList } from "../../../../redux/selectors";
import { connect } from "react-redux";

interface SiderBarProps {
  selectedRecipeCount: number;
}

const SideBar: React.FC<SiderBarProps> = (props) => {
  const sidebarHeight = getSidebarHeight();
  let sidebarContainerStyle = {
    height: sidebarHeight + "px",
  };
  const searchContainerMaxHeight = getRecipeSearchComponentHeight(
    sidebarHeight,
    props.selectedRecipeCount
  );
  return (
    <div className={classes.sideBar} style={sidebarContainerStyle}>
      <SelectedRecipeList></SelectedRecipeList>
      <div>
        <RecipeSearch maxHeight={searchContainerMaxHeight}></RecipeSearch>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const selectedRecipeCount = getSelectedRecipeList(state).length;
  return {
    selectedRecipeCount,
  };
};

export default connect(mapStateToProps, {})(SideBar);
