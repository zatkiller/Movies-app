/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux'; //Provider makes redux store available to all components

import './App.css';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        Redux
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
      </div>
    </Provider>
  );
};

export default App;
