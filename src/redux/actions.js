import {
  ADD_RECIPE_TO_SELECTED_LIST,
  REMOVE_RECIPE_FROM_SELECTED_LIST,
  UPDATE_RECIPE_LIST,
} from "./actionTypes";

export const addRecipeToSelectedList = (recipe) => ({
  type: ADD_RECIPE_TO_SELECTED_LIST,
  payload: { recipe },
});

export const removeRecipeFromSelectedList = (recipeId) => ({
  type: REMOVE_RECIPE_FROM_SELECTED_LIST,
  payload: { recipeId },
});

export const updateRecipeList = (recipeList) => ({
  type: UPDATE_RECIPE_LIST,
  payload: { recipeList },
});
