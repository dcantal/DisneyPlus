import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';
import studiosReducer from './studios_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    studios: studiosReducer,
});

export default entitiesReducer;