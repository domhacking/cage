import { TEST } from './actionTypes'

export const initialState = {
  loggedIn: false,
  user: null
}

export default (state = initialState, action) => {

  switch (action.type) {

    case TEST:
      return Object.assign({}, state, {
        loggedIn: true,
        user: action.username
      });

    default:
      return state

  }

}
