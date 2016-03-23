import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../store/configureStore';
import { requireAuth } from '../services/auth';

// containers
import App from './App';
import * as Profile from '../../profile';
import * as Login from '../../login';
import * as Register from '../../register';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

export default class Root extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Profile.Container} />
            <Route path="/login" component={Login.Container} />
            <Route path="/register" component={Register.Container} />
            <Route path="/profile" component={Profile.Container} onEnter={requireAuth} />

            {/* 404 */}
            <Route path="*" component={Profile.Container} />
          </Route>
        </Router>
      </Provider>
    );

  }

}
