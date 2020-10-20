import React from "react";
import { connect } from "react-redux";
import Recipe from "./Recipe";
import classes from "./SelectedRecipeList.module.scss";

class SelectedRecipeList extends React.Component {
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

const mapStateToProps = (state) => {
  const selectedRecipeList = state.selectedRecipe.selectedRecipeList;
  return {
    selectedRecipeList,
  };
};

export default connect(mapStateToProps)(SelectedRecipeList);
