import {
  ADD_RECIPE_TO_SELECTED_LIST,
  SELECT_RECIPE,
  REMOVE_RECIPE_FROM_SELECTED_LIST,
  UPDATE_RECIPE_LIST,
} from "./actionTypes";
import axios from "axios";

export const addRecipeToSelectedList = (recipe) => ({
  type: ADD_RECIPE_TO_SELECTED_LIST,
  payload: { recipe },
});

export const selectRecipe = (recipeId) => ({
  type: SELECT_RECIPE,
  payload: recipeId,
});

export const removeRecipeFromSelectedList = (recipeId) => ({
  type: REMOVE_RECIPE_FROM_SELECTED_LIST,
  payload: { recipeId },
});

export const fetchRecipeList = () => {
  return (dispatch) => {
    axios
      .get("https://easy-cooking-services.herokuapp.com/recipe")
      .then((response) => {
        let recipes = response.data;
        console.log("recipes fetched from server:", recipes);
        localStorage.setItem("recipes", JSON.stringify(recipes));
        dispatch(updateRecipeList(recipes));
      });
  };
};

export const fetchRecipesFromLocalStorage = () => {
  return (dispatch) => {
    let recipesString = localStorage.getItem("recipes");
    if (recipesString !== null) {
      let recipes = JSON.parse(recipesString);
      console.log("recipes retrieved from localstorage", recipes);
      dispatch(updateRecipeList(recipes));
      dispatch(addRecipeToSelectedList(recipes[0]));
    }
  };
};

export const updateRecipeList = (recipeList) => ({
  type: UPDATE_RECIPE_LIST,
  payload: { recipeList },
});
