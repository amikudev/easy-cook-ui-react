import React from "react";
import './RecipeSearch.css';

import Button from '@material-ui/core/Button';

import RecipeSmallCard from "../recipe-small-card/RecipeSmallCard";


export default class RecipeSearch extends React.Component {
    getFilteredRecipes = () => {
        let searchText = this.props.searchText;
        let filteredRecipes = searchText === '' ?
            this.props.allRecipes :
            this.props.allRecipes.filter(recipe => {
                return recipe.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
            });
        return filteredRecipes;
    }

    render() {
        let recipes = this.getFilteredRecipes();

        let recipeListUI = recipes.map(recipe => {
            return <RecipeSmallCard key={recipe._id} recipe={recipe} recipeClickHandler={this.props.recipeClickHandler}/>
        });
        return (
            <div>
                <h1>Recipe list</h1>
                <input type="text" value={this.props.searchText}
                       onChange={this.props.recipeSearchTextChangeHandler}/>
                <Button variant="contained" color="primary">
                    Search Recipes
                </Button>
                {recipeListUI}
            </div>
        )
    }
}
