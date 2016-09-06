import React, { Component } from 'react';

import RecipeBox from './RecipeBox';
import RecipeForm from './RecipeForm';
import AddRecipe from './AddRecipe';

import '../App.css';
const App = (props) => {
  return (
    <div>
      <h1 className="text-center">Recipes</h1>
      <RecipeBox recipes={props.recipes} removeRecipe={props.removeRecipe} />
      <RecipeForm show={props.show} addRecipe={props.addRecipe} toggleForm={props.toggleForm} />
      <AddRecipe toggleForm={props.toggleForm} />
    </div>
  );
}

export default App;
