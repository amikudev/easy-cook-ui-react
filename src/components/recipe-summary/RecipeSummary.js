import React from "react";
import "./RecipeSummary.scss";

export default class RecipeSummary extends React.Component {
  render(props) {
    return (
      <div
        className="recipe-small-card"
        onClick={() => this.props.recipeClickHandler(this.props.recipe._id)}
      >
        {this.props.recipe.title}
      </div>
    );
  }
}
