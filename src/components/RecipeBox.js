import React, { Component } from 'react';
import Recipe from './Recipe';

const RecipeBox = (props) => {
  let recipeNodes = props.recipes.map((recipe) => {
    return <Recipe name={recipe.name} ingredients={recipe.ingredients} id={recipe.id} />
  });
  return (
  <div className="recipe-box">
    {recipeNodes}
  </div>
  )
};

export default RecipeBox;
