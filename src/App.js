import React from 'react';
import './App.css';
import Header from "./components/Header";
import RecipeSearch from "./components/recipe-search/RecipeSearch";
import Recipe from "./components/recipe/Recipe";
import axios from "axios";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            allRecipes: [],
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
                    ></RecipeSearch>
                    <Recipe></Recipe>
                </main>
            </div>
        )
    } ;
}
