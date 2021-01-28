import { combineReducers } from "redux";
import recipeList from "./recipeList";
import selectedRecipe from "./selectedRecipe";
import storeVersion from "./storeVersion";
import appState from "./appState";

export default combineReducers({
  recipeList,
  selectedRecipe,
  storeVersion,
  appState,
});
