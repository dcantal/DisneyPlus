import {
    RECEIVE_MOVIES,
    RECEIVE_MOVIE
} from '../actions/movie_actions';

import merge from 'lodash/merge';

const moviesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    debugger
    switch (action.type) {
        case RECEIVE_MOVIES:
            debugger
            return action.movies;
        case RECEIVE_MOVIE:
            newState = merge({}, state, { [action.movie.id]: action.movie });
            return newState;
        default:
            return state;
    }
};

export default moviesReducer;