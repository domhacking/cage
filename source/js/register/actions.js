import { CREATE, ERROR } from './actionTypes';
import * as Firebase from '../shared/services/firebase';

function receiveUserSuccess(user) {
  return {
    type: CREATE,
    uid: user.uid
  }
}

function receiveUserFailure(error) {
  return {
    type: ERROR,
    code: error.code
  }
}

export function createUser(payload) {

  return (dispatch, getState) => {

    Firebase.createUser(payload)
      .then( user => dispatch(receiveUserSuccess(user)) )
      .catch( error => dispatch(receiveUserFailure(error)) );

  }

}
