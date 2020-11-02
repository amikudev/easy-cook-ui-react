const getRecipeQuantityNumber = (quantity) => {
  //return null if it is falsy
  if (
    quantity === null ||
    quantity === undefined ||
    quantity === 0 ||
    quantity === ""
  ) {
    return null;
  } else if (typeof quantity === "string") {
    return parseFloat(quantity);
  } else if (typeof quantity === "number") {
    return quantity;
  } else {
    console.error("wrong type of quantity");
    alert("wrong type of quantity");
  }
};

const updateIngredientsInRecipe = (recipe) => {
  const baseRecipeQuantity = getRecipeQuantityNumber(recipe.baseRecipe);
  const recipeTargetQuantity = getRecipeQuantityNumber(recipe.targetRecipe);

  let multiplicationRatio = 1;
  if (
    typeof baseRecipeQuantity === "number" &&
    typeof recipeTargetQuantity === "number"
  ) {
    multiplicationRatio = recipeTargetQuantity / baseRecipeQuantity;
  }
  console.log("multiplication ratio is: ", multiplicationRatio);

  recipe.ingredients.map((ingredient) => {
    if (ingredient.quantity) {
      ingredient.displayQuantity = ingredient.quantity * multiplicationRatio;
    }
  });
};

export { getRecipeQuantityNumber, updateIngredientsInRecipe };
