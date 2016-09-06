import {ADD_RECIPE, REMOVE_RECIPE} from '../actions/Actions';

// assume state is an array

const initialState = [ 
  { 
    name: 'Guacamole', 
    ingredients: 'Avocado,Lime,Salt,Tomato,Jalapeno,Garlic', 
    id: 0},
  { 
    name: 'Ceasar Salad', 
    ingredients: 'Romaine,Oil,Egg,Garlic,Salt,Pepper',
    id: 1
  } 
];

const recipeApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return [
        ...state,
        {
          name: action.name,
          ingredients: action.ingredients,
          id: state.length // hacky
        }
       ];
    case REMOVE_RECIPE:
      if (state.length === 0) return state;
      return state.filter(recipe => {
        if (recipe.id === action.id) return false;
        return true;
      });
    default:
      return state;
  }
};

export default recipeApp
