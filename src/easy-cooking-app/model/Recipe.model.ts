import RecipeSource from "./RecipeSource.model";
import IngredientsModel from "./Ingredients.Model";

export default interface RecipeModel {
  _id: string;
  title: string;
  source: RecipeSource;
  healthRating?: string | number | null;
  tasteRating?: string | number | null;
  baseRecipe: string | number | null;
  targetRecipe: string | number | null;
  ingredients: IngredientsModel[];
  [field: string]: any;
}
