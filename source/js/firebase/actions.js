import { CREATE } from './actionTypes';
import { FIREBASE_URL } from '../shared/constants';
import * as Firebase from '../shared/services/firebase';

function receiveRef(ref) {

  return {
    type: CREATE,
    ref: ref
  }

}

export function create(url) {

  return (dispatch, getState) => {
    return Firebase.create(url)
      .then(req => req.ref)
      .then(ref => dispatch(receiveRef(ref)));
  }

}

export function get(path) {

  return (dispatch, getState) => {

    // const firebaseRef = getState().firebase.ref;
    Firebase.create(FIREBASE_URL + path)
      .then(req => req.ref)
      .then(ref => {
        ref.once('value', function (snapshot) {
          console.log(snapshot.val());
        });
      });

  }

}
