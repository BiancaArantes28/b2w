import { all } from 'redux-saga/effects';
import { helloWorldSagas } from './helloWorldSagas/helloWorldSagas';

export default function* rootSagas() {
    return yield all([
        ...helloWorldSagas,
    ])
}