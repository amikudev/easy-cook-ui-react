import React from 'react';

export default class RecipeSmallCard extends React.Component {
    render(props) {
        return (
            <div>{this.props.recipe.title}</div>
        )
    }
}
