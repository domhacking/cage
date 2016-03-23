import { AUTH, ERROR, LOGOUT } from './actionTypes';
import { push } from 'react-router-redux';
import * as Firebase from '../shared/services/firebase';

function receiveLoginSuccess(user) {
  return {
    type: AUTH,
    user
  }
}

function receiveLoginFailure(error) {
  return {
    type: ERROR,
    code: error.code
  }
}

function receiveLogout() {
  return {
    type: LOGOUT
  }
}

export function loginUser(payload) {

  return (dispatch, getState) => {

    Firebase.authUser(payload)
      .then( user => {
        dispatch(receiveLoginSuccess(user));
        dispatch(push('/'));
      })
      .catch( error => dispatch(receiveLoginFailure(error)) );

  }

}

export function logoutUser() {

  return (dispatch, getState) => {

    Firebase.unauthUser()
      .then( () => {
        dispatch(receiveLogout());
        dispatch(push('/login'));
      });

  }

}
