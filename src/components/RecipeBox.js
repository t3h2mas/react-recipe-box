import React from 'react';
import Recipe from './Recipe';

const RecipeBox = (props) => {
  const removeRecipe = props.removeRecipe; // scope to `.map`
  let recipeNodes = props.recipes.map((recipe) => {
    return <Recipe 
              name={recipe.name} 
              ingredients={recipe.ingredients} 
              id={recipe.id} 
              key={recipe.id} 
              removeRecipe={removeRecipe}
            />
  });
  return (
  <div className="recipe-box">
    {recipeNodes}
  </div>
  )
};

RecipeBox.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  removeRecipe: React.PropTypes.func.isRequired
};

export default RecipeBox;