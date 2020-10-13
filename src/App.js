import React from 'react';
import './App.css';
import Header from "./components/Header";
import RecipeSearch from "./components/recipe-search/RecipeSearch";
import SelectedRecipeList from "./components/recipe/SelectedRecipeList";
import axios from "axios";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            allRecipes: [],
            selectedRecipeList: []
        };
    }

    componentDidMount = () => {
        axios.get('https://easy-cooking-services.herokuapp.com/recipe')
            .then((response) => {
                console.log('recipes:', response.data);
                this.setState({
                    allRecipes: response.data
                });
            });
    }

    recipeSearchTextChangeHandler = (event) => {
        this.setState({
            searchText: event.target.value
        });
    }

    recipeClickHandler = recipeId => {
        console.log('recipe click handler fired');
        let filteredRecipeList = this.state.allRecipes.filter(recipe => recipe._id === recipeId);
        let selectedRecipe;
        if(filteredRecipeList.length === 1) {
            selectedRecipe = filteredRecipeList[0];
        }
        else {
            console.error('log error here');
            return;
        }

        this.setState(state => {
            let selectedRecipeList = JSON.parse(JSON.stringify(state.selectedRecipeList));
            return {
                selectedRecipeList: [...selectedRecipeList, selectedRecipe]
            }
        });
    }

    render = () => {
        return (
            <div className="App">
                <header className="App-header">
                    <Header appName="Easy Cooking"></Header>
                </header>
                <main className="App-body">
                    <RecipeSearch
                        searchText={this.state.searchText}
                        allRecipes={this.state.allRecipes}
                        recipeSearchTextChangeHandler={this.recipeSearchTextChangeHandler}
                        recipeClickHandler={this.recipeClickHandler}
                    ></RecipeSearch>
                    <SelectedRecipeList selectedRecipeList={this.state.selectedRecipeList}></SelectedRecipeList>
                </main>
            </div>
        )
    } ;
}
