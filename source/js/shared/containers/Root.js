import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from '../store/configureStore';

// Firebase
import * as firebase from '../../firebase';
import { FIREBASE_URL } from '../constants';

// containers
import App from './App';
import * as Profile from '../../profile';
import * as Login from '../../login';

const store = configureStore();

// create Firebase ref
store.dispatch(firebase.actions.create(FIREBASE_URL));

export default class Root extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Profile.Container} />
            <Route path="/login" component={Login.Container} />

            {/* 404 */}
            <Route path="*" component={Profile.Container} />
          </Route>
        </Router>
      </Provider>
    );

  }

}
