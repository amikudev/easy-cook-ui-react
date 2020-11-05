import React from "react";
import { connect } from "react-redux";
import Video from "./Video";

import { updateIngredientsInRecipe } from "../../../../utils/recipeCalculations";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import classes from "./Recipe.module.scss";

import { updateRecipeQuantity } from "../../../../redux/actions";
import IngredientGrid from "./IngredientGrid";
import {
  getSelectedRecipe,
  getSelectedRecipePreferences,
} from "../../../../redux/selectors";

class Recipe extends React.Component {
  render() {
    // return if recipe props is not initialized yet
    if (this.props.recipe === null) {
      return null;
    }

    let recipe = JSON.parse(JSON.stringify(this.props.recipe));
    let recipePreferences = JSON.parse(
      JSON.stringify(this.props.recipePreferences)
    );

    // update recipe target value to empty string, which a requirement for controlled components
    if (recipe.targetRecipe === null || recipe.targetRecipe === undefined) {
      recipe.targetRecipe = "";
    }

    updateIngredientsInRecipe(recipe, recipePreferences);

    return (
      <div className={classes.recipe}>
        <div className={classes.recipeLeftcol}>
          <h5>{recipe.title}</h5>
          <div className={classes.recipeTextData}>
            <label>Recipe Quantity</label>
            <input
              type="text"
              className="form form-control"
              value={recipe.baseRecipe}
              disabled
            />
          </div>
          <div className={classes.recipeTextData}>
            <label>Desired Quantity</label>
            <input
              type="number"
              className="form form-control"
              value={recipePreferences.targetRecipe}
              onChange={(event) =>
                this.props.updateRecipeQuantity(recipe._id, event.target.value)
              }
            />
          </div>
          <Video url={recipe.source.url}></Video>
        </div>
        <div>
          <IngredientGrid recipe={recipe}></IngredientGrid>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  const recipe = getSelectedRecipe(state);
  const recipePreferences = getSelectedRecipePreferences(state);
  return {
    recipe,
    recipePreferences,
  };
};

export default connect(mapStateToProps, {
  updateRecipeQuantity,
})(Recipe);
