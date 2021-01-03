import { combineReducers } from "redux";
import recipeList from "./recipeList";
import selectedRecipe from "./selectedRecipe";
import storeVersion from "./storeVersion";

export default combineReducers({ recipeList, selectedRecipe, storeVersion });
