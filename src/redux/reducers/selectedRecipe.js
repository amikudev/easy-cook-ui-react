import {
  ADD_RECIPE_TO_SELECTED_LIST,
  REMOVE_RECIPE_FROM_SELECTED_LIST,
  SELECT_RECIPE,
  UPDATE_RECIPE_QUANTITY,
} from "../actionTypes";

import produce from "immer";

const initialState = {
  selectedRecipeList: [],
  selectedRecipeId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_RECIPE_TO_SELECTED_LIST: {
      const { recipe } = action.payload;
      const isRecipeAlreadySelected =
        state.selectedRecipeList.filter(
          (arrRecipe) => arrRecipe._id === recipe._id
        ).length > 0;
      const selectedRecipeList = isRecipeAlreadySelected
        ? state.selectedRecipeList
        : [...state.selectedRecipeList, recipe];

      return produce(state, (draft) => {
        draft.selectedRecipeId = recipe._id;
        draft.selectedRecipeList = selectedRecipeList;
      });
    }

    case UPDATE_RECIPE_QUANTITY: {
      const { recipeId, recipeQuantity } = action.payload;
      return produce(state, (draft) => {
        let recipeList = draft.selectedRecipeList.filter(
          (recipe) => recipe._id === recipeId
        );
        if (recipeList.length !== 1) {
          console.error("recipe list length should be 1 here, but it is not");
        }
        let recipe = recipeList[0];
        recipe.targetRecipe = recipeQuantity;
      });
    }

    case SELECT_RECIPE: {
      return produce(state, (draft) => {
        draft.selectedRecipeId = action.payload;
      });
    }

    case REMOVE_RECIPE_FROM_SELECTED_LIST: {
      return state;
    }
    default:
      return state;
  }
}
