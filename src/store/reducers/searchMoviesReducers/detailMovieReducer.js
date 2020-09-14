import {
    DETAIL_MOVIE,
    DETAIL_MOVIE_SUCCESSFUL,
    DETAIL_MOVIE_FAILED,
} from '../../actions/searchMovies/detailMovieActions';
import { STATUS } from '../../../const/status';
import { withoutError } from '../../../const/success';

const defaultState = {
    status: STATUS.NOT_FETCHED,
    movie: {}
}

const inProgressDetailMovie = (state) => {
    return {
        ...state,
        status: STATUS.INPROGRESS,
    };
}

const successfulDetailMovie = (state, payload) => {
    return {
        ...withoutError(state),
        movie: payload,
        status: STATUS.FETCHED,
    };
}

const failedDetailMovie = (state, payload) => {
    return {
        status: STATUS.FETCHED,
        error: payload
    };
}

export default function detailMovieReducer(state = defaultState, action) {
    switch(action.type) {
        case DETAIL_MOVIE:
            return inProgressDetailMovie(state);

        case DETAIL_MOVIE_SUCCESSFUL:
            return successfulDetailMovie(state, action.payload);

        case DETAIL_MOVIE_FAILED:
            return failedDetailMovie(state, action.payload);

        default:
            return state;
    }
}
