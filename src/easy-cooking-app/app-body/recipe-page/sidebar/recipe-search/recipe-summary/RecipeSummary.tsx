import React from "react";
import styles from "./RecipeSummary.module.scss";
import RecipeModel from "../../../../../model/Recipe.model";
import exp from "constants";

interface RecipeSummaryInterface {
  recipe: RecipeModel;
}

const RecipeSummary: React.FC<RecipeSummaryInterface> = (props) => {
  return <div className={styles.recipeSmallCard}>{props.recipe.title}</div>;
};

export default RecipeSummary;
