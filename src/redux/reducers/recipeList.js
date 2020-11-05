import { UPDATE_RECIPE_LIST, UPDATE_RECIPE_QUANTITY } from "../actionTypes";

import produce from "immer";

const initialState = {
  recipeList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_RECIPE_LIST: {
      const { recipeList } = action.payload;
      const newState = produce(state, (draftState) => {
        draftState.recipeList = recipeList;
      });
      return newState;
    }
    case UPDATE_RECIPE_QUANTITY: {
      const { recipeId, recipeQuantity } = action.payload;
      return produce(state, (draft) => {
        let recipeList = draft.recipeList.filter(
          (recipe) => recipe._id === recipeId
        );
        if (recipeList.length !== 1) {
          console.error("recipe list length should be 1 here, but it is not");
        }
        let recipe = recipeList[0];
        recipe.targetRecipe = recipeQuantity;
      });
    }
    default:
      return state;
  }
}
