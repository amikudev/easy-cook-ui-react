import { UPDATE_RECIPE_LIST } from "../actionTypes";

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
    default:
      return state;
  }
}
