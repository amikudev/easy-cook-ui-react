import React from "react";
import styles from "./RecipeSummary.module.scss";

export default class RecipeSummary extends React.Component {
  render(props) {
    return (
      <div
        className={styles.recipeSmallCard}
        onClick={() => this.props.recipeClickHandler(this.props.recipe._id)}
      >
        {this.props.recipe.title}
      </div>
    );
  }
}
