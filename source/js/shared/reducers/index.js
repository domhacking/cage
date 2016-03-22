import { combineReducers } from 'redux';
import * as profile from '../../profile';
import * as login from '../../login';

export default combineReducers({
  [profile.name]: profile.reducer,
  [login.name]: login.reducer,
});
