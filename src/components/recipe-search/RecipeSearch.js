import React from "react";
import './RecipeSearch.css';
import axios from 'axios';

import RecipeSmallCard from "../recipe-small-card/RecipeSmallCard";


export default class RecipeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            allRecipes: [],
            filteredRecipes: []
        };
    }

    componentDidMount() {
        //get the data
        axios.get('https://easy-cooking-services.herokuapp.com/recipe')
            .then((response) => {
                console.log(response);
                this.updateAllRecipes(response.data);
                this.updateFilteredRecipes();
            });
    }

    updateAllRecipes = (recipes) => {
        this.setState({
            allRecipes: recipes
        });
    };

    updateFilteredRecipes = (searchText = '') => {
        this.setState((state, props) => {
            let filteredRecipes = searchText === '' ?
                state.allRecipes :
                state.allRecipes.filter(recipe => {
                    console.log(recipe.title);
                    return recipe.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
                });
            return {
                filteredRecipes: filteredRecipes
            };
        });
    };

    handleSearchInputChange = (event) => {
        let searchString = event.target.value;
        this.setState({
            searchText: searchString
        });
        this.updateFilteredRecipes(searchString);
    }

    render() {
        return (
            <div>
                <h1>Recipe list</h1>
                <input type="text" value={this.state.searchText} onChange={this.handleSearchInputChange}/>
                <button type="button">Search Recipes</button>
                {
                    this.state.filteredRecipes.map(recipe => <RecipeSmallCard recipe={recipe}/>)
                }
            </div>
        )
    }
}
