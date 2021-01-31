import RecipeSource from "./RecipeSource.model";
import IngredientsModel from "./Ingredients.Model";

export default interface RecipeModel {
  _id: string;
  title: string;
  source: RecipeSource;
  healthRating?: string | number | undefined;
  tasteRating?: string | number | undefined;
  baseRecipe: string | number | undefined;
  targetRecipe: string | number | undefined;
  ingredients: IngredientsModel[];
  [field: string]: any;
}
