import { TOGGLE_FORM } from '../actions/Actions';

const initialState = false;

const toggle = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FORM:
            return !state;
        default:
            return state;
    }
}

export default toggle;