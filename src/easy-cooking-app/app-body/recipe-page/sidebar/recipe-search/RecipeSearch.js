import React from "react";
import { connect } from "react-redux";
import classes from "./RecipeSearch.module.scss";
import {
  addRecipeToSelectedList,
  updateRecipeList,
  fetchRecipeList,
} from "../../../../../redux/actions";

import cn from "classnames";

import RecipeSummary from "./recipe-summary/RecipeSummary";

class RecipeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
    this.searchBoxRef = React.createRef();
  }

  componentDidMount() {
    this.searchBoxRef.current.focus();
    this.props.fetchRecipeList();
  }

  getFilteredRecipes = () => {
    let searchText = this.state.searchText;
    let filteredRecipes =
      searchText === ""
        ? this.props.allRecipes
        : this.props.allRecipes.filter((recipe) => {
            return (
              recipe.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
            );
          });
    return filteredRecipes;
  };

  recipeSearchTextChangeHandler = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  recipeClickHandler = (recipe) => {
    console.log("clicked on a recipe named: " + recipe.title);
    this.props.addRecipeToSelectedList(recipe._id);
  };

  render() {
    let recipes = this.getFilteredRecipes();

    let recipeListUI = recipes.map((recipe) => {
      return (
        <div
          key={recipe._id}
          recipe={recipe}
          onClick={this.recipeClickHandler.bind(this, recipe)}
        >
          <RecipeSummary recipe={recipe}></RecipeSummary>
        </div>
      );
    });
    return (
      <div className={classes.recipeSearchBox}>
        <input
          ref={this.searchBoxRef}
          className={cn(["form", "form-control", classes.searchInput])}
          type="text"
          title={"Search Recipes"}
          value={this.state.searchText}
          onChange={this.recipeSearchTextChangeHandler}
        />
        <h5>All recipes</h5>
        {recipeListUI}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const recipeList = state.recipeList.recipeList;
  return {
    allRecipes: recipeList,
  };
};

export default connect(mapStateToProps, {
  addRecipeToSelectedList,
  updateRecipeList,
  fetchRecipeList,
})(RecipeSearch);
