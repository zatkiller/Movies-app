/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux'; //Provider makes redux store available to all components

import './App.css';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Setup React Redux</h1>
      </div>
    </Provider>
  );
};

export default App;
