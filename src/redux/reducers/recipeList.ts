import { UPDATE_RECIPE_LIST } from "../actionTypes";

import produce from "immer";
import RecipeModel from "../../easy-cooking-app/model/Recipe.model";

const initialState: {
  recipeList: RecipeModel[];
} = {
  recipeList: [],
};

export default function (state = initialState, action: any) {
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
