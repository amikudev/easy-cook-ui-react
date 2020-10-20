import { UPDATE_RECIPE_LIST } from "../actionTypes";

const initialState = {
  recipeList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_RECIPE_LIST: {
      const { recipeList } = action.payload;
      return {
        ...state,
        recipeList: recipeList,
      };
    }
    default:
      return state;
  }
}
