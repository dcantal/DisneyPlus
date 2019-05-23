import {
    RECEIVE_STUDIOS,
    RECEIVE_STUDIO
} from '../actions/studio_actions';

import merge from 'lodash/merge';

const studiosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    debugger
    switch (action.type) {
        case RECEIVE_STUDIOS:
            debugger
            return action.studios;
        case RECEIVE_STUDIO:
            newState = merge({}, state, { [action.studio.id]: action.studio });
            return newState;
        default:
            return state;
    }
};

export default studiosReducer;