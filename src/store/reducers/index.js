import { combineReducers } from 'redux';

import fetchPostsReducer from './helloWorldReducers';

export default combineReducers({
    helloWorld: fetchPostsReducer,
});
