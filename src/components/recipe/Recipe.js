import React from "react";

export default class Recipe extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h1>{this.props.recipe.title}</h1>
            </React.Fragment>
        );
    }
}
