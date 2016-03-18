import { TEST } from './actionTypes';

export function login(username, password) {

  console.log(username, password);

  return {
    type: TEST,
    username
  }
}
