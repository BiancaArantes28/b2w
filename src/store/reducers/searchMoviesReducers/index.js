import { combineReducers } from 'redux';
import searchMoviesReducer from './searchMoviesReducer';

export default combineReducers({
    result: searchMoviesReducer,
});