import React from "react";
import Recipe from "./Recipe";

export default class SelectedRecipeList extends React.Component {

    render() {
        return (
            <div>
                {this.props.selectedRecipeList.map(recipe => <Recipe recipe={recipe}/>)}
            </div>
        );
    }
}
