import { all } from 'redux-saga/effects';
import { helloWorldSagas } from './helloWorldSagas/helloWorldSagas';
import { SearchMoviesSagas } from './searchMoviesSagas/searchMoviesSagas';

export default function* rootSagas() {
    return yield all([
        ...helloWorldSagas,
        ...SearchMoviesSagas,
    ])
}