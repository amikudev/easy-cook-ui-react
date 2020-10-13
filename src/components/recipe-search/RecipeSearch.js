import React from "react";
import './RecipeSearch.css';
import axios from 'axios';

import Button from '@material-ui/core/Button';

import RecipeSmallCard from "../recipe-small-card/RecipeSmallCard";


export default class RecipeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            allRecipes: [],
        };
    }

    componentDidMount() {
        axios.get('https://easy-cooking-services.herokuapp.com/recipe')
            .then((response) => {
                console.log('recipes:', response.data);
                this.updateAllRecipes(response.data);
            });
    }

    updateAllRecipes = (recipes) => {
        this.setState({
            allRecipes: recipes
        });
    };

    getFilteredRecipes = () => {
        let searchText = this.state.searchText;
        let filteredRecipes = searchText === '' ?
            this.state.allRecipes :
            this.state.allRecipes.filter(recipe => {
                console.log(recipe.title);
                return recipe.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
            });
        return filteredRecipes;
    }

    handleSearchInputChange = (event) => {
        let searchString = event.target.value;
        this.setState({
            searchText: searchString
        });
    }

    render() {
        let recipes = this.getFilteredRecipes();
        return (
            <div>
                <h1>Recipe list</h1>
                <input type="text" value={this.state.searchText}
                       onChange={this.handleSearchInputChange}/>
                <Button variant="contained" color="primary">
                    Search Recipes
                </Button>
                {
                    recipes.map(recipe => {
                        return <RecipeSmallCard key={recipe._id} recipe={recipe}/>
                    })
                }
            </div>
        )
    }
}
