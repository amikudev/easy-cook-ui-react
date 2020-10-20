import {
  ADD_RECIPE_TO_SELECTED_LIST,
  REMOVE_RECIPE_FROM_SELECTED_LIST,
} from "../actionTypes";

const initialState = {
  selectedRecipeList: [],
  selectedRecipeId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_RECIPE_TO_SELECTED_LIST: {
      const { recipe } = action.payload;
      return {
        ...state,
        selectedRecipeId: recipe._id,
        selectedRecipeList: [...state.selectedRecipeList, recipe],
      };
    }
    case REMOVE_RECIPE_FROM_SELECTED_LIST: {
      return state;
    }
    default:
      return state;
  }
}
