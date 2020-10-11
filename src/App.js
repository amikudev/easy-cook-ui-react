import React from 'react';
import './App.css';
import Header from "./components/Header";
import RecipeSearch from "./components/recipe-search/RecipeSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header appName="Easy Cooking"></Header>
      </header>
        <RecipeSearch></RecipeSearch>
    </div>
  );
}

export default App;
