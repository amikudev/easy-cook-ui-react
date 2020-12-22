import RecipeModel from "../easy-cooking-app/model/Recipe.model";

export const getSelectedRecipe = (store: any) => {
  const selectedRecipeId = store.selectedRecipe.selectedRecipeId;
  const recipeList = store.recipeList.recipeList;

  let selectedRecipeList = recipeList.filter(
    (recipe: RecipeModel) => recipe._id === selectedRecipeId
  );
  if (selectedRecipeList.length === 1) {
    return selectedRecipeList[0];
  } else {
    return null;
  }
};

export const getSelectedRecipePreferences = (store: any) => {
  if (store.selectedRecipe.selectedRecipeId) {
    return store.selectedRecipe.selectedRecipes[
      store.selectedRecipe.selectedRecipeId
    ];
  } else {
    return null;
  }
};

export const getSelectedRecipeList = (store: any) => {
  const selectedRecipeIdList = Object.keys(
    store.selectedRecipe.selectedRecipes
  );
  const recipeList = store.recipeList.recipeList;

  let selectedRecipeList = recipeList.filter((recipe: RecipeModel) =>
    selectedRecipeIdList.includes(recipe._id)
  );

  return selectedRecipeList;
};
