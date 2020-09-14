import { all } from 'redux-saga/effects';
import { helloWorldSagas } from './helloWorldSagas/helloWorldSagas';
import { SearchMoviesSagas } from './searchMoviesSagas/searchMoviesSagas';
import { DetailMovieSagas } from './searchMoviesSagas/detailMovieSagas';

export default function* rootSagas() {
    return yield all([
        ...helloWorldSagas,
        ...SearchMoviesSagas,
        ...DetailMovieSagas,
    ])
}