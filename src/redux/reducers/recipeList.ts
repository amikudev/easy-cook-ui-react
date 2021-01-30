import { UPDATE_RECIPE, UPDATE_RECIPE_LIST } from "../actionTypes";

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

    case UPDATE_RECIPE: {
      const { recipeId, fieldPath, updatedValue } = action.payload;

      return produce(state, (draft) => {
        const recipe = draft.recipeList.find(
          (recipe) => recipe._id === recipeId
        );
        if (recipe) {
          if (fieldPath.length === 1) {
            recipe[fieldPath[0]] = updatedValue;
          } else if (fieldPath.length === 2) {
            recipe[fieldPath[0]][fieldPath[1]] = updatedValue;
          } else {
            console.error("Recipe update field path can only be 1 or 2");
          }
        }
      });
    }

    default:
      return state;
  }
}
