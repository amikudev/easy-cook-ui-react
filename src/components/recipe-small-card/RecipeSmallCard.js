import React from 'react';

export default class RecipeSmallCard extends React.Component {
    render(props) {
        return (
            <div onClick={() => this.props.recipeClickHandler(this.props.recipe._id)}>{this.props.recipe.title}</div>
        )
    }
}
