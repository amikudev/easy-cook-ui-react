import React from "react";

import axios from 'axios';

import RecipeSmallCard from "../recipe-small-card/RecipeSmallCard";


export default class RecipeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    updateRecipes = (recipes) => {
        this.setState({
            recipes: recipes
        });
    }

    componentDidMount() {
        //get the data
        axios.get('https://easy-cooking-services.herokuapp.com/recipe')
            .then((response) => {
                console.log(response);
                this.updateRecipes(response.data);
            });
    }

    render() {
        return (
            <div>
                <h1>Recipe list</h1>
                {
                    this.state.recipes.map(recipe => <RecipeSmallCard recipe={recipe}/>)
                }
            </div>

        )
    }

}
