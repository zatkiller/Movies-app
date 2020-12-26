import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// Thunk is a redux middleware

import rootReducers from './reducers';
// Importing index.js

const initialState = {};
const middleware = [thunk];

export const store = createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
