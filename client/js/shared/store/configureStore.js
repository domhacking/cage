import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import * as Firebase from '../services/firebase';
import { FIREBASE_URL } from '../constants';

const logger = createLogger();

const firedux = Firebase.create(FIREBASE_URL);

const rootReducer = combineReducers({
  firedux: firedux.reducer(),
  ...reducers
})

const finalCreateStore = compose(
  applyMiddleware(logger)
)(createStore);

export default function configureStore(initialState = {}) {

  const store = finalCreateStore(rootReducer, initialState);

  // Set dispatch function from store on your Firedux instance.
  firedux.dispatch = store.dispatch;

  store.subscribe(() => {
    const state = store.getState();
    const { data, authData } = state.firedux;

    // Lazy loading
    // e.g. once authorized, get user data:
    if (authData && authData.auth && authData.auth.uid) {
      firedux.watch(`users/${authData.auth.uid}`)
    }
  });

  return {
    store,
    firedux
  };

}
