import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import * as profile from '../../profile';
import * as login from '../../login';
import * as register from '../../register';

export default combineReducers({
  routing: routerReducer,
  [profile.name]: profile.reducer,
  [login.name]: login.reducer,
  [register.name]: register.reducer,
});
