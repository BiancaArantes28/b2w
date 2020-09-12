import { combineReducers } from 'redux';

import fetchPostsReducer from './helloWorldReducers';
import searchMoviesReducer from './searchMoviesReducers';

export default combineReducers({
    helloWorld: fetchPostsReducer,
    movies: searchMoviesReducer,
});
