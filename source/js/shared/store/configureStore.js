import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import R from 'ramda';
import rootReducer from '../reducers';
import * as Storage from '../services/storage';
import { STATE_KEY } from '../constants';

const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(thunk, logger)
)(createStore);

// persist stored state
const initialState = Storage.getItem(STATE_KEY) || {};

export default function configureStore(state = initialState) {

  const store = finalCreateStore(rootReducer, initialState);

  // store state on change
  store.subscribe( () => {

    // omit register state, firebase refs from state storage
    // TODO - consider, may be easier to explicitly include state to store rather than omit
    const state = R.omit(['register'], R.map(R.omit(['ref']), store.getState()));

    Storage.setItem(STATE_KEY, state);

  });

  return store;

}
