import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//Thunk is a redux middleware

import rootReducers from './reducers'; //Importing index.js

const initialstate = {};
const middleware = [thunk];

export const store = createStore(rootReducers, initialState, composeWithDevTools(applyMiddlewar(...middleware)));

export default store;
