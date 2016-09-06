// addRecipe actions

export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';

export const addRecipe = (name, ingredients) => ({
  type: ADD_RECIPE,
  name,
  ingredients
});

export const removeRecipe = (id) => ({
  type: REMOVE_RECIPE,
  id
});

export const editRecipe = (id, name, ingredients) => ({
  type: EDIT_RECIPE,
  id,
  name,
  ingredients
});

// toggleForm actions

export const TOGGLE_FORM = 'TOGGLE_FORM';

export const toggleForm = () => ({
  type: TOGGLE_FORM
});