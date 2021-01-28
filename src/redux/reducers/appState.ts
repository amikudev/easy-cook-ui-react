import { UPDATE_RECIPE_EDITABILITY } from "../actionTypes";

import produce from "immer";
// import RecipeModel from "../../easy-cooking-app/model/Recipe.model";

const initialState: {
  recipeEditable: boolean;
} = {
  recipeEditable: false,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case UPDATE_RECIPE_EDITABILITY: {
      const newState = produce(state, (draftState) => {
        draftState.recipeEditable = action.editable;
      });
      return newState;
    }

    default:
      return state;
  }
}
