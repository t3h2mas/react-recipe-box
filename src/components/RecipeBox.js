import React, { Component } from 'react';
import Recipe from './Recipe';

const RecipeBox = (props) => {
  let recipes = props.recipes || [{name: 'bork', ingredients: 'bork,bork', id: 0}];
  let recipeNodes = recipes.map((recipe) => {
    return <Recipe name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />
  });
  return (
  <div className="recipe-box">
    {recipeNodes}
  </div>
  )
};

export default RecipeBox;