import { put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_HELLO_WORLD,
    fetchHelloWorldSuccess,
    fetchHelloWorldFailed
} from '../../actions/helloWorldActions/helloWorldActions';

export function* doFetchHelloWorld() {
    try {
        const payload = 'Hello World!';

        yield put(fetchHelloWorldSuccess(payload));
    } catch (error) {
        yield put(fetchHelloWorldFailed(error));
    }
}

export const helloWorldSagas = [
    takeLatest(FETCH_HELLO_WORLD, doFetchHelloWorld),
];
