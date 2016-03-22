import { combineReducers } from 'redux';
import * as profile from '../../profile';
import * as login from '../../login';
import * as register from '../../register';

export default combineReducers({
  [profile.name]: profile.reducer,
  [login.name]: login.reducer,
  [register.name]: register.reducer,
});
