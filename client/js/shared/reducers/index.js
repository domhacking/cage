import { combineReducers } from 'redux';
import * as profile from '../../profile';

export default combineReducers({
  [profile.name]: profile.reducer
});
