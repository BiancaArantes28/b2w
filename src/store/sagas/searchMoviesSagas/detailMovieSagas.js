import { call, put, takeLatest } from 'redux-saga/effects';
import {
    DETAIL_MOVIE,
    detailMovieSuccessful,
    detailMovieFailed,
} from '../../actions/searchMovies/detailMovieActions';
import { getAPIURL } from '../../../config/getPATH';
import { getAPIKey } from '../../../config/getAPIKey';
import { fetchGet } from '../sagaUtils';

export function* doDetailMovie(action) {
    try {
        const serviceUrl = getAPIURL();

        const url = `${serviceUrl}?apikey=${getAPIKey()}&i=${action.payload}`;
        const result = yield call(fetchGet, url);

        yield put(detailMovieSuccessful(result.data));
    } catch (error) {
        yield put(detailMovieFailed(error));
    }
}

export const DetailMovieSagas = [
    takeLatest(DETAIL_MOVIE, doDetailMovie),
];
