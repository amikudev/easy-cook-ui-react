import React from "react";
import "./App.css";
import Header from "./components/Header";
import RecipeSearch from "./components/recipe-search/RecipeSearch";
import SelectedRecipeList from "./components/recipe/SelectedRecipeList";

export default class App extends React.Component {
  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <Header appName="Easy Cooking"></Header>
        </header>
        <main className="App-body">
          <RecipeSearch></RecipeSearch>
          <SelectedRecipeList></SelectedRecipeList>
        </main>
      </div>
    );
  };
}
