import {
  ADD_RECIPE_TO_SELECTED_LIST,
  REMOVE_RECIPE_FROM_SELECTED_LIST,
  SELECT_RECIPE,
  UPDATE_RECIPE_QUANTITY,
} from "../actionTypes";

import produce from "immer";

const initialState: {
  selectedRecipesMap: any;
  selectedRecipeId: string | null;
} = {
  selectedRecipesMap: {},
  selectedRecipeId: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ADD_RECIPE_TO_SELECTED_LIST: {
      const { recipeId } = action.payload;
      let isRecipeAlreadySelected = state.selectedRecipesMap[recipeId]
        ? true
        : false;

      return produce(state, (draft) => {
        if (!isRecipeAlreadySelected) {
          draft.selectedRecipesMap[recipeId] = {
            targetRecipe: "",
          };
        }
        draft.selectedRecipeId = recipeId;
      });
    }

    case UPDATE_RECIPE_QUANTITY: {
      const { recipeId, recipeQuantity } = action.payload;
      return produce(state, (draft) => {
        draft.selectedRecipesMap[recipeId] = {
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
        const selectedRecipesMap = draft.selectedRecipesMap;
        delete selectedRecipesMap[recipeId];
      });
    }
    default:
      return state;
  }
}
