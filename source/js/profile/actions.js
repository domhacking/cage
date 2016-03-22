import { RECEIVE_REF } from './actionTypes';
import * as Firebase from '../shared/services/firebase';

export function updateRef(ref, payload) {
  return {
    type: RECEIVE_REF,
    ref,
    payload
  }
}

export function receiveRef(snapshot) {

  return (dispatch, getState) => {

    const ref = snapshot.ref();
    const payload = snapshot.val();

    dispatch(updateRef(ref, payload));

  }

}

export function setProfile(payload) {

  return (dispatch, getState) => {

    Firebase.set(getState().profile.ref, payload)
      .catch( error => console.error(error) );

  }

}

export function removeRef() {

  return (dispatch, getState) => {

    Firebase.removeAllListeners(getState().profile.ref);

  }

}
