// actions

export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';

export const addRecipe = (name, ingredients) => ({
  type: ADD_RECIPE,
  name,
  ingredients
});

export const removeRecipe = (index) => ({
  type: REMOVE_RECIPE,
  index
});


