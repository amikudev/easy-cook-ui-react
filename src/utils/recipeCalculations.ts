import RecipeModel from "../easy-cooking-app/model/Recipe.model";

const getRecipeQuantityNumber = (quantity: number | string | null) => {
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

const updateIngredientsInRecipe = (
  recipe: RecipeModel,
  recipePreferences: any
) => {
  const baseRecipeQuantity = getRecipeQuantityNumber(recipe.baseRecipe);
  const recipeTargetQuantity = getRecipeQuantityNumber(
    recipePreferences.targetRecipe
  );

  let multiplicationRatio = 1;
  if (
    typeof baseRecipeQuantity === "number" &&
    typeof recipeTargetQuantity === "number"
  ) {
    multiplicationRatio = recipeTargetQuantity / baseRecipeQuantity;
  }
  console.log("multiplication ratio is: ", multiplicationRatio);

  recipe.ingredients.forEach((ingredient) => {
    if (ingredient.quantity) {
      ingredient.displayQuantity = (
        +ingredient.quantity * multiplicationRatio
      ).toFixed(2);
      let roundedOffQuantity = formatQuantityNumber(ingredient.displayQuantity);
      ingredient.displayQuantity = roundedOffQuantity;

      //error checkup.
      let changePercentage = Math.abs(
        (+roundedOffQuantity - +ingredient.quantity) / +ingredient.quantity
      );
      if (changePercentage > 10) {
        console.log(
          "Quantity rounding off from: " +
            ingredient.displayQuantity +
            " to: " +
            roundedOffQuantity
        );
        console.error(
          `Ingredient ${ingredient.name} has changed by ${changePercentage}, which is not acceptable`
        );
      }

      //create one field from Quantity and UOM
      const formattedUom = ingredient.uom ? ` ${ingredient.uom}` : "";
      ingredient.quantityAndUom = `${ingredient.displayQuantity}${formattedUom}`;
    }
  });
};

const formatQuantityNumber = (quantity: number) => {
  if (quantity < 1) {
    return Number(quantity).toPrecision(1);
  } else if (quantity < 7) {
    let result = Number(quantity).toPrecision(2);

    //in next line, i have converted it to a float and back to string, why?
    //Ans. Because when we convert a number to string, it does not shows the trainling zero's
    //e.g.  3.40 becomes '3.4', this was required to look good in the the application
    return parseFloat(result).toString();
  } else if (quantity < 1000) {
    return Number(quantity).toPrecision(Math.floor(Math.log10(quantity)) + 1);
  } else {
    //todo: show only 3 significant digits here.
    return Number(quantity).toPrecision(Math.floor(Math.log10(quantity)) + 1);
  }
};

export { updateIngredientsInRecipe };
