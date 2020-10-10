import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import HeaderFn from "./components/HeaderFn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header appName="Easy Cooking"></Header>
          <HeaderFn appName="My Easy Cooking"></HeaderFn>
      </header>
    </div>
  );
}

export default App;
