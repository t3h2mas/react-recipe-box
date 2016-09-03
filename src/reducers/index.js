import { combineReducers } from 'redux';
import toggle from './toggleForm';
import recipeApp from './recipeApp';

const reducer = combineReducers({
    toggle,
    recipeApp
});

export default reducer;