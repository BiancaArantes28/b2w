import { call, put, takeLatest } from 'redux-saga/effects';
import {
    SEARCH_MOVIES,
    searchMoviesSuccessful,
    searchMoviesFailed
} from '../../actions/searchMovies/searchMoviesActions';
import { getAPIURL } from '../../../config/getPATH';
import { getAPIKey } from '../../../config/getAPIKey';
import { fetchGet } from '../sagaUtils';

export function* doSearchMovies(action) {
    try {
        const { page, movieTitle } = action.payload;
        const serviceUrl = getAPIURL();

        const url = `${serviceUrl}?apikey=${getAPIKey()}&s=${movieTitle}&page=${page}`;
        const result = yield call(fetchGet, url);

        const payload = {
            movies: result.data.Search,
            totalResults: parseInt(result.data.totalResults)
        };

        yield put(searchMoviesSuccessful(payload));

    } catch (error) {
        yield put(searchMoviesFailed(error));
    }
}

export const SearchMoviesSagas = [
    takeLatest(SEARCH_MOVIES, doSearchMovies),
];
