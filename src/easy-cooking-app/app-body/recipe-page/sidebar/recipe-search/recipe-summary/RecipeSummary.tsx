import React from "react";
import styles from "./RecipeSummary.module.scss";
import RecipeModel from "../../../../../model/Recipe.model";

interface RecipeSummaryInterface {
  recipe: RecipeModel;
}

export default class RecipeSummary extends React.Component<RecipeSummaryInterface> {
  render() {
    return (
      <div className={styles.recipeSmallCard}>{this.props.recipe.title}</div>
    );
  }
}
