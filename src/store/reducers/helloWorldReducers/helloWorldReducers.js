import {
    FETCH_HELLO_WORLD,
    FETCH_HELLO_WORLD_SUCCESSFUL,
    FETCH_HELLO_WORLD_FAILED
} from '../../actions/helloWorldActions/helloWorldActions';
import { STATUS } from '../../../const/status';
import { withoutError } from '../../../const/success';

const defaultState = {
    status: STATUS.NOT_FETCHED,
    text: '',
};

const inProgressHelloWorld = (state) => {
    return {
        ...state,
        status: STATUS.INPROGRESS
    };
}

const errorHelloWorld = (state, error) => {
    return {
        ...state,
        status: STATUS.FETCHED,
        error,
    }
}

const successfulHelloWorld = (state, payload) => {
    return {
        ...withoutError(state),
        status: STATUS.FETCHED,
        text: payload,
    }
};

export default function fetchHelloWorldReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_HELLO_WORLD:
            return inProgressHelloWorld(state);

        case FETCH_HELLO_WORLD_SUCCESSFUL:
            return successfulHelloWorld(state, action.payload);

        case FETCH_HELLO_WORLD_FAILED:
            return errorHelloWorld(state);
        
        default:
            return state;
    }
}
