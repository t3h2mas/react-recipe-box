import {ADD_RECIPE, REMOVE_RECIPE} from '../actions/Actions';

const initialState = {
  recipes: [ { name: 'Guacamole', ingredients: 'Avocado,Lime,Salt,Tomato,Jalapeno,Garlic', id: 0} ]
};

const recipeApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return [
        ...state,
        {
          name: action.name,
          action: action.ingredients,
          id: state.length
        }
      ];
    default:
      return state;
  }
};

export default recipeApp
