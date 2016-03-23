import Firebase from 'firebase';
import { FIREBASE_URL } from '../constants';

export function generateRef(path) {

  const url = FIREBASE_URL + path;
  const ref = new Firebase(url);

  return ref;

}

export function create(path, action) {

  // establish connection w/callback action

  const ref = generateRef(path);

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

  const ref = generateRef();

  return new Promise((resolve, reject) => {

    ref.createUser({
      ...payload
    }, (error, userData) => {
      if (error) return reject(error);
      else return resolve(userData);
    });

  });

}

export function authUser(payload) {

  // auth user w/email+password

  const ref = generateRef();

  return new Promise((resolve, reject) => {

    ref.authWithPassword({
      ...payload
    }, (error, authData) => {
      if (error) return reject(error);
      else return resolve(authData);
    });

  });

}

export function unauthUser() {

  // unauth user

  const ref = generateRef();

  ref.unauth();

}

export function isLoggedIn() {

  // check for authd user

  const ref = generateRef();

  return ref.getAuth();

}
