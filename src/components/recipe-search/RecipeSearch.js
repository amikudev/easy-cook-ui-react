import React from "react";
import classes from "./RecipeSearch.module.scss";

import Button from "@material-ui/core/Button";
import cn from "classnames";

import RecipeSummary from "../recipe-summary/RecipeSummary";

export default class RecipeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.searchBoxRef = React.createRef();
  }
  componentDidMount() {
    this.searchBoxRef.current.focus();
  }

  getFilteredRecipes = () => {
    let searchText = this.props.searchText;
    let filteredRecipes =
      searchText === ""
        ? this.props.allRecipes
        : this.props.allRecipes.filter((recipe) => {
            return (
              recipe.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
            );
          });
    if (this.searchBoxRef.current) {
      this.searchBoxRef.current.focus();
    }
    return filteredRecipes;
  };

  render() {
    let recipes = this.getFilteredRecipes();

    let recipeListUI = recipes.map((recipe) => {
      return (
        <RecipeSummary
          key={recipe._id}
          recipe={recipe}
          recipeClickHandler={this.props.recipeClickHandler}
        />
      );
    });
    return (
      <div>
        <input
          ref={this.searchBoxRef}
          className={cn(["form", "form-control", classes.searchInput])}
          type="text"
          value={this.props.searchText}
          onChange={this.props.recipeSearchTextChangeHandler}
        />
        {/*<Button variant="contained" color="primary">*/}
        {/*  Search Recipes*/}
        {/*</Button>*/}
        {recipeListUI}
      </div>
    );
  }
}
