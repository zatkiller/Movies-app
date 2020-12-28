import React from 'react';
import { Provider } from 'react-redux';
// Provider makes redux store available to all components

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import store from './redux/store';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Details from './components/details/Details';

// Router
// Switch is when you have more than 1 route

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="app">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:id/:name/details" component={Details} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
