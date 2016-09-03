import { TOGGLE_FORM } from '../actions/Actions';

const initialState = { show: false };

const toggle = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FORM:
            return Object.assign({}, state, { show: !state.show });
        default:
            return state;
    }
}

export default toggle;