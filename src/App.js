import React from 'react';
import { Provider } from 'react-redux';
// Provider makes redux store available to all components

import './App.scss';
import store from './redux/store';

import Header from './components/header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="app">
        <h1>Setup React Redux</h1>
      </div>
    </Provider>
  );
};

export default App;
