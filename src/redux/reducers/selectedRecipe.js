import {
  ADD_RECIPE_TO_SELECTED_LIST,
  REMOVE_RECIPE_FROM_SELECTED_LIST,
  SELECT_RECIPE,
  UPDATE_RECIPE_QUANTITY,
} from "../actionTypes";

import produce from "immer";

const initialState = {
  selectedRecipeIdList: [],
  selectedRecipeId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_RECIPE_TO_SELECTED_LIST: {
      const { recipeId } = action.payload;
      const isRecipeAlreadySelected =
        state.selectedRecipeIdList.filter(
          (arrRecipeId) => arrRecipeId === recipeId
        ).length > 0;
      const selectedRecipeIdList = isRecipeAlreadySelected
        ? state.selectedRecipeIdList
        : [...state.selectedRecipeIdList, recipeId];

      return produce(state, (draft) => {
        draft.selectedRecipeId = recipeId;
        draft.selectedRecipeIdList = selectedRecipeIdList;
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
