export const FETCH_HELLO_WORLD = 'FETCH_HELLO_WOLRD';
export const FETCH_HELLO_WORLD_SUCCESSFUL = 'FETCH_HELLO_WOLRD_SUCCESSFUL';
export const FETCH_HELLO_WORLD_FAILED = 'FETCH_HELLO_WOLRD_FAILED';

export const fetchHelloWorld = () => ({
    type: FETCH_HELLO_WORLD,
});

export const fetchHelloWorldSuccess = (payload) => ({
    type: FETCH_HELLO_WORLD_SUCCESSFUL,
    payload
});

export const fetchHelloWorldFailed = (error) => ({
    type: FETCH_HELLO_WORLD_SUCCESSFUL,
    payload: error
});
