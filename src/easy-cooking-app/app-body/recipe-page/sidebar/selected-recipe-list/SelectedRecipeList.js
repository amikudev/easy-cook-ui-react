import React from "react";
import { connect } from "react-redux";
import RecipeSummary from "../recipe-search/recipe-summary/RecipeSummary";
import classes from "./SelectedRecipeList.module.scss";

class SelectedRecipeList extends React.Component {
  render() {
    return (
      <div className={classes.selectedRecipes}>
        {this.props.selectedRecipeList.map((recipe) => (
          <div key={recipe._id}>
            <RecipeSummary recipe={recipe} />
          </div>
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
