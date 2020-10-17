import React from "react";
import Recipe from "./Recipe";
import classes from "./SelectedRecipeList.module.scss";

export default class SelectedRecipeList extends React.Component {
  render() {
    return (
      <div className={classes.selectedRecipes}>
        {this.props.selectedRecipeList.map((recipe) => (
          <Recipe recipe={recipe} />
        ))}
      </div>
    );
  }
}
