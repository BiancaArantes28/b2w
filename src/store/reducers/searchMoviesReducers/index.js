import { combineReducers } from 'redux';
import searchMoviesReducer from './searchMoviesReducer';
import detailMovieReducer from './detailMovieReducer';

export default combineReducers({
    result: searchMoviesReducer,
    detail:  detailMovieReducer,
});