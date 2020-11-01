import React from "react";
import { connect } from "react-redux";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import classes from "./Recipe.module.scss";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desiredQuantity: "",
    };
  }

  desiredQuantityUpdateHandler = (event) => {
    this.setState({
      desiredQuantity: event.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    //todo: reset recipe desired quantity if a different recipe has been loaded
  }

  render() {
    return this.props.selectedRecipeId ? (
      <div className={classes.recipe}>
        <div className={classes.recipeLeftcol}>
          <h5>{this.props.recipe.title}</h5>
          <div className={classes.recipeTextData}>
            <label>Recipe Quantity</label>
            <input
              type="text"
              className="form form-control"
              value={this.props.recipe.baseRecipe}
              disabled
            />
          </div>
          <div className={classes.recipeTextData}>
            <label>Desired Quantity</label>
            <input
              type="number"
              className="form form-control"
              value={this.state.desiredQuantity}
              onChange={this.desiredQuantityUpdateHandler}
            />
          </div>
        </div>
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
      </div>
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
