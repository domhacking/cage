import { combineReducers } from 'redux';
import * as firebase from '../../firebase';
import * as profile from '../../profile';
import * as login from '../../login';

export default combineReducers({
  [firebase.name]: firebase.reducer,
  [profile.name]: profile.reducer,
  [login.name]: login.reducer,
});
