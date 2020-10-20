import { combineReducers } from "redux";
import recipeList from "./recipeList";
import selectedRecipe from "./selectedRecipe";

export default combineReducers({ recipeList, selectedRecipe });
