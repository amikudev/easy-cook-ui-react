import {
  ADD_RECIPE_TO_SELECTED_LIST,
  REMOVE_RECIPE_FROM_SELECTED_LIST,
  SELECT_RECIPE,
} from "../actionTypes";

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
      return {
        ...state,
        selectedRecipeId: recipe._id,
        selectedRecipeList,
      };
    }
    case SELECT_RECIPE: {
      return {
        ...state,
        selectedRecipeId: action.payload,
      };
    }
    case REMOVE_RECIPE_FROM_SELECTED_LIST: {
      return state;
    }
    default:
      return state;
  }
}
