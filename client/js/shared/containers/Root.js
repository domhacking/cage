import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from '../store/configureStore';

// containers
import App from './App';
import * as Profile from '../../profile';

// HACK - firedux, needs better implementation -> https://github.com/adjohnson916/firedux/issues/8
const { store, firedux } = configureStore();

export default class Root extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Profile.Container} firedux={firedux} />
            {/*<Route path="/another" component={Another} />*/}
          </Route>
        </Router>
      </Provider>
    );

  }

}
