import React from "react";
import { connect } from "react-redux";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./Recipe.module.scss";

class Recipe extends React.Component {
  render() {
    // const rowData =
    return this.props.selectedRecipeId ? (
      <React.Fragment>
        <h5>{this.props.recipe.title}</h5>
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
          <AgGridReact rowData={this.props.recipe.ingredients}>
            <AgGridColumn
              field="name"
              headerName="Ingredient name"
            ></AgGridColumn>
            <AgGridColumn field="quantity" headerName="Quantity"></AgGridColumn>
            <AgGridColumn field="uom" headerName="Unit"></AgGridColumn>
          </AgGridReact>
        </div>
      </React.Fragment>
    ) : null;
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

export default connect(mapStateToProps, null)(Recipe);
