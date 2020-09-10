import { combineReducers } from 'redux';
import fetchHelloWorldReducer from './helloWorldReducers';

export default combineReducers({
    hello: fetchHelloWorldReducer,
});