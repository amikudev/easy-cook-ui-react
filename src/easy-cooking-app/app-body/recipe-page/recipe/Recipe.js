import React from "react";
import { connect } from "react-redux";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import Video from "./Video";

import { updateIngredientsInRecipe } from "../../../../utils/recipeCalculations";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import classes from "./Recipe.module.scss";

import { updateRecipeQuantity } from "../../../../redux/actions";

class Recipe extends React.Component {
  render() {
    // return if selectedRecipeId is not defined
    if (this.props.selectedRecipeId === null) {
      return null;
    }

    let recipe = JSON.parse(JSON.stringify(this.props.recipe));
    updateIngredientsInRecipe(recipe);

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
              value={recipe.targetRecipe}
              onChange={(event) =>
                this.props.updateRecipeQuantity(recipe._id, event.target.value)
              }
            />
          </div>
          <Video></Video>
        </div>
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
          <AgGridReact rowData={recipe.ingredients}>
            <AgGridColumn
              field="name"
              headerName="Ingredient name"
            ></AgGridColumn>
            <AgGridColumn
              field="displayQuantity"
              headerName="Quantity"
            ></AgGridColumn>
            <AgGridColumn field="uom" headerName="Unit"></AgGridColumn>
          </AgGridReact>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  let selectedRecipeList = state.selectedRecipe.selectedRecipeList;
  let selectedRecipeId = state.selectedRecipe.selectedRecipeId;

  const recipeList = selectedRecipeList.filter(
    (recipe) => recipe._id === selectedRecipeId
  );
  return {
    recipe: recipeList[0],
    selectedRecipeId,
  };
};

export default connect(mapStateToProps, {
  updateRecipeQuantity,
})(Recipe);
