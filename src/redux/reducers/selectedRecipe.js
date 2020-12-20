import {
  ADD_RECIPE_TO_SELECTED_LIST,
  REMOVE_RECIPE_FROM_SELECTED_LIST,
  SELECT_RECIPE,
  UPDATE_RECIPE_QUANTITY,
} from "../actionTypes";

import produce from "immer";

const initialState = {
  selectedRecipes: {},
  selectedRecipeId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_RECIPE_TO_SELECTED_LIST: {
      const { recipeId } = action.payload;
      let isRecipeAlreadySelected = state.selectedRecipes[recipeId]
        ? true
        : false;

      return produce(state, (draft) => {
        if (!isRecipeAlreadySelected) {
          draft.selectedRecipes[recipeId] = {
            targetRecipe: "",
          };
        }
        draft.selectedRecipeId = recipeId;
      });
    }

    case UPDATE_RECIPE_QUANTITY: {
      const { recipeId, recipeQuantity } = action.payload;
      return produce(state, (draft) => {
        draft.selectedRecipes[recipeId] = {
          targetRecipe: recipeQuantity,
        };
      });
    }

    case SELECT_RECIPE: {
      return produce(state, (draft) => {
        draft.selectedRecipeId = action.payload;
      });
    }

    case REMOVE_RECIPE_FROM_SELECTED_LIST: {
      const { recipeId } = action.payload;
      return produce(state, (draft) => {
        if (draft.selectedRecipeId === recipeId) {
          draft.selectedRecipeId = null;
        }
        const selectedRecipes = draft.selectedRecipes;
        delete selectedRecipes[recipeId];
      });
    }
    default:
      return state;
  }
}
