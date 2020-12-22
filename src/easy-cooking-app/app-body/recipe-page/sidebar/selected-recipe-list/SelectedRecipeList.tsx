import React from "react";
import { connect } from "react-redux";
import RecipeSummary from "../recipe-search/recipe-summary/RecipeSummary";
import classes from "./SelectedRecipeList.module.scss";
import {
  selectRecipe,
  removeRecipeFromSelectedList,
} from "../../../../../redux/actions";
import { getSelectedRecipeList } from "../../../../../redux/selectors";
import RecipeModel from "../../../../model/Recipe.model";

interface SelectedRecipeListComponentInterface {
  selectedRecipeList: RecipeModel[];
  removeRecipeFromSelectedList: Function;
  selectRecipe: Function;
}

class SelectedRecipeList extends React.Component<SelectedRecipeListComponentInterface> {
  render() {
    return this.props.selectedRecipeList.length > 0 ? (
      <div>
        <h5>Selected Recipes</h5>
        <div className={classes.selectedRecipes}>
          {this.props.selectedRecipeList.map((recipe) => (
            <div className={classes.recipeHolder} key={recipe._id}>
              <button
                onClick={() =>
                  this.props.removeRecipeFromSelectedList(recipe._id)
                }
              >
                x
              </button>
              <div onClick={() => this.props.selectRecipe(recipe._id)}>
                <RecipeSummary recipe={recipe} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : null;
  }
}

//todo: remove any type from state
const mapStateToProps = (state: any) => {
  const selectedRecipeList = getSelectedRecipeList(state);
  return {
    selectedRecipeList,
  };
};

export default connect(mapStateToProps, {
  selectRecipe,
  removeRecipeFromSelectedList,
})(SelectedRecipeList);
