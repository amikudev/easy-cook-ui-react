import React from "react";
import { connect } from "react-redux";
import classes from "./RecipeSearch.module.scss";
import {
  addRecipeToSelectedList,
  updateRecipeList,
} from "../../../../../redux/actions";

import cn from "classnames";

import RecipeSummary from "./recipe-summary/RecipeSummary";
import axios from "axios";

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

    //get recipes from localstorage and set them
    let recipesString = localStorage.getItem("recipes");
    if (recipesString !== null) {
      let recipes = JSON.parse(recipesString);
      console.log("recipes retrieved from localstorage", recipes);
      console.log("typeof recipes", typeof recipes);
      this.props.updateRecipeList(recipes);
    }

    axios
      .get("https://easy-cooking-services.herokuapp.com/recipe")
      .then((response) => {
        let recipes = response.data;
        console.log("recipes fetched from server:", recipes);
        localStorage.setItem("recipes", JSON.stringify(recipes));
        this.props.updateRecipeList(recipes);
      });
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
    if (this.searchBoxRef.current) {
      this.searchBoxRef.current.focus();
    }
    return filteredRecipes;
  };

  recipeSearchTextChangeHandler = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  render() {
    let recipes = this.getFilteredRecipes();

    let recipeListUI = recipes.map((recipe) => {
      return (
        <RecipeSummary
          key={recipe._id}
          recipe={recipe}
          recipeClickHandler={() => this.props.addRecipeToSelectedList(recipe)}
        />
      );
    });
    return (
      <div>
        <input
          ref={this.searchBoxRef}
          className={cn(["form", "form-control", classes.searchInput])}
          type="text"
          value={this.state.searchText}
          onChange={this.recipeSearchTextChangeHandler}
        />
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
})(RecipeSearch);
