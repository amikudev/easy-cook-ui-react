// import { Action, ActionCreator, Dispatch } from "redux";
// import { ThunkAction } from "redux-thunk";
import {
  ADD_RECIPE_TO_SELECTED_LIST,
  SELECT_RECIPE,
  REMOVE_RECIPE_FROM_SELECTED_LIST,
  UPDATE_RECIPE_LIST,
  UPDATE_RECIPE_QUANTITY,
} from "./actionTypes";
import axios from "axios";
import { constants } from "../utils/Constants";
import RecipeModel from "../easy-cooking-app/model/Recipe.model";

// import { printAllRecipies } from "../utils/videoCalculations";

export const addRecipeToSelectedList = (recipeId: string) => {
  return {
    type: ADD_RECIPE_TO_SELECTED_LIST,
    payload: { recipeId },
  };
};

export const selectRecipe = (recipeId: string) => ({
  type: SELECT_RECIPE,
  payload: recipeId,
});

export const removeRecipeFromSelectedList = (recipeId: string) => ({
  type: REMOVE_RECIPE_FROM_SELECTED_LIST,
  payload: { recipeId },
});

export const fetchRecipeList = () => {
  return (dispatch: any) => {
    axios.get(constants.serviceUrl).then((response) => {
      let recipes = response.data;
      recipes = recipes.reverse();
      console.log("recipes fetched from server:", recipes);
      dispatch(updateRecipeList(recipes));
    });
  };
};

export const updateRecipeList = (recipeList: RecipeModel[]) => ({
  type: UPDATE_RECIPE_LIST,
  payload: { recipeList },
});

export const updateRecipeQuantity = (
  recipeId: string,
  recipeQuantity: number
) => ({
  type: UPDATE_RECIPE_QUANTITY,
  payload: {
    recipeId,
    recipeQuantity,
  },
});
