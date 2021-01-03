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
    return store.selectedRecipe.selectedRecipesMap[
      store.selectedRecipe.selectedRecipeId
    ];
  } else {
    return null;
  }
};

export const getSelectedRecipeList = (store: any): RecipeModel[] => {
  const selectedRecipeIdList: string[] =
    store.selectedRecipe.selectedRecipeIdList;
  const recipeList: RecipeModel[] = store.recipeList.recipeList;

  let selectedRecipeList: (RecipeModel | undefined)[] = [];
  selectedRecipeList = selectedRecipeIdList.map((recipeId) =>
    recipeList.find((recipe) => recipe._id === recipeId)
  );

  return selectedRecipeList as RecipeModel[];
};
