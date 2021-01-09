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
import classnames from "classnames";

interface SelectedRecipeListComponentInterface {
  selectedRecipeList: RecipeModel[];
  removeRecipeFromSelectedList: Function;
  selectRecipe: Function;
  selectedRecipeId: string | null;
}

class SelectedRecipeList extends React.Component<SelectedRecipeListComponentInterface> {
  render() {
    const classesForNotSelectedRecipe = classnames({
      [classes.recipeHolder]: true,
    });
    const classesForSelectedRecipe = classnames({
      [classes.recipeHolder]: true,
      [classes.selectedRecipe]: true,
    });
    return this.props.selectedRecipeList.length > 0 ? (
      <div>
        <h5>Selected Recipes</h5>
        <div className={classes.selectedRecipes}>
          {this.props.selectedRecipeList.map((recipe) => (
            <div
              key={recipe._id}
              className={
                recipe._id === this.props.selectedRecipeId
                  ? classesForSelectedRecipe
                  : classesForNotSelectedRecipe
              }
            >
              <div
                className={classes.recipeSummary}
                onClick={() => this.props.selectRecipe(recipe._id)}
              >
                <RecipeSummary recipe={recipe} />
              </div>
              <button
                onClick={() =>
                  this.props.removeRecipeFromSelectedList(recipe._id)
                }
              >
                x
              </button>
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
    selectedRecipeId: state.selectedRecipe.selectedRecipeId,
  };
};

export default connect(mapStateToProps, {
  selectRecipe,
  removeRecipeFromSelectedList,
})(SelectedRecipeList);
