import Firebase from 'firebase';
import { FIREBASE_URL } from '../constants';

export function create(path, action) {

  // establish connection w/callback action

  const url = FIREBASE_URL + path;
  const ref = new Firebase(url);

  return ref.on('value', snapshot => action(snapshot));

}

export function set(ref, payload) {

  // update

  return new Promise((resolve, reject) => {

    ref.set({...payload}, error => {
      if (error) return reject(error);
      else return resolve();
    });

  });

}

export function removeAllListeners(ref) {

  // disconnect

  ref.off();

}

export function createUser(payload) {

  // create new email/password user

  const ref = new Firebase(FIREBASE_URL);

  return new Promise((resolve, reject) => {

    ref.createUser({
      ...payload
    }, function(error, userData) {
      if (error) return reject(error);
      else return resolve(userData);
    });

  });

}
