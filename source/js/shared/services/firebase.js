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
