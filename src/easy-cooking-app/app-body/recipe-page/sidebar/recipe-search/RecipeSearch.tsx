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

import RecipeModel from "../../../../model/Recipe.model";

interface RecipeSearchInterface {
  allRecipes: RecipeModel[];
  fetchRecipeList: Function;
  addRecipeToSelectedList: Function;
  maxHeight: number;
}

class RecipeSearch extends React.Component<RecipeSearchInterface> {
  state: {
    searchText: string;
  };
  searchBoxRef: React.RefObject<HTMLInputElement>;

  constructor(props: RecipeSearchInterface) {
    super(props);
    this.state = {
      searchText: "",
    };
    this.searchBoxRef = React.createRef<HTMLInputElement>();
  }

  componentDidMount() {
    if (this.searchBoxRef.current) {
      this.searchBoxRef.current.focus();
    }
    this.props.fetchRecipeList();
  }

  getFilteredRecipes = () => {
    let searchText = this.state.searchText;
    let filteredRecipes =
      searchText === ""
        ? this.props.allRecipes
        : this.props.allRecipes.filter((recipe) => {
            let titleMatch =
              recipe.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
            let cookMatch = false;
            if (recipe.source.cook) {
              cookMatch =
                recipe.source.cook
                  .toLowerCase()
                  .indexOf(searchText.toLowerCase()) >= 0;
            }
            return titleMatch || cookMatch;
          });
    return filteredRecipes;
  };

  recipeSearchTextChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  recipeClickHandler = (recipe: RecipeModel) => {
    console.log("clicked on a recipe named: " + recipe.title);
    this.props.addRecipeToSelectedList(recipe._id);
  };

  render() {
    let recipes = this.getFilteredRecipes();

    let recipeListUI = recipes.map((recipe: RecipeModel) => {
      return (
        <div
          key={recipe._id}
          onClick={this.recipeClickHandler.bind(this, recipe)}
        >
          <RecipeSummary recipe={recipe}></RecipeSummary>
        </div>
      );
    });
    return (
      <div className={classes.recipeSearchBox}>
        <h5>Recipe Search</h5>
        <input
          ref={this.searchBoxRef}
          className={cn(["form", "form-control", classes.searchInput])}
          type="text"
          title={"Search Recipes"}
          value={this.state.searchText}
          onChange={this.recipeSearchTextChangeHandler}
        />
        <div className={classes.RecipeList}>{recipeListUI}</div>
      </div>
    );
  }
}

//todo: add proper type to state
const mapStateToProps = (state: any) => {
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
