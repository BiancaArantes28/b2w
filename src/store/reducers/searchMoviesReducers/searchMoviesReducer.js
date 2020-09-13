import {
    SEARCH_MOVIES,
    SEARCH_MOVIES_SUCCESSFUL,
    SEARCH_MOVIES_FAILED
} from '../../actions/searchMovies/searchMoviesActions';
import { STATUS } from '../../../const/status';
import { withoutError } from '../../../const/success';

const defaultState = {
    status: STATUS.NOT_FETCHED,
    movies: [],
    totalResults: 0,
    page: 1,
}

const inProgressSearchMovies = (state, payload) => {
    return {
        ...state,
        search: payload.movieTitle,
        page: payload.page,
        status: STATUS.INPROGRESS
    };
}

const successfulSearchMovies = (state, payload) => {
    return {
        ...withoutError(state),
        status: STATUS.FETCHED,
        movies: payload.movies,
        totalResults: payload.totalResults
    };
}

const failedSearchMovies = (state, error) => {
    return {
        ...state,
        status: STATUS.INPROGRESS,
        movies: [],
        error
    };
}

export default function searchMoviesReducer(state = defaultState, action) {
    switch (action.type) {
        case SEARCH_MOVIES:
            return inProgressSearchMovies(state, action.payload);

        case SEARCH_MOVIES_SUCCESSFUL:
            return successfulSearchMovies(state, action.payload);

        case SEARCH_MOVIES_FAILED:
            return failedSearchMovies(state);
        
        default:
            return state;
    }
}
