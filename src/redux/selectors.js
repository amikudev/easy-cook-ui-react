export const getSelectedRecipe = (store) => {
  const selectedRecipeId = store.selectedRecipe.selectedRecipeId;
  const recipeList = store.recipeList.recipeList;

  let selectedRecipeList = recipeList.filter(
    (recipe) => recipe._id === selectedRecipeId
  );
  if (selectedRecipeList.length === 1) {
    return selectedRecipeList[0];
  } else {
    return null;
  }
};

export const getSelectedRecipeList = (store) => {
  const selectedRecipeIdList = store.selectedRecipe.selectedRecipeIdList;
  const recipeList = store.recipeList.recipeList;

  let selectedRecipeList = recipeList.filter((recipe) =>
    selectedRecipeIdList.includes(recipe._id)
  );

  return selectedRecipeList;
};
