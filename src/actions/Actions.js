// addRecipe actions

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

// toggleForm actions

export const TOGGLE_FORM = 'TOGGLE_FORM';

export const toggleForm = () => ({
  type: TOGGLE_FORM
});