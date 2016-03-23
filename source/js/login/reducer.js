import { AUTH, ERROR } from './actionTypes'

export const initialState = {
  error: false,
  errorCode: null,
  authorised: false,
  user: null
}

export default (state = initialState, action) => {

  switch (action.type) {

    case AUTH:
      return Object.assign({}, state, {
        error: false,
        errorCode: null,
        authorised: true,
        user: action.user
      });

    case ERROR:
      return Object.assign({}, state, {
        error: true,
        errorCode: action.code,
        authorised: false,
        user: null
      });

    default:
      return state

  }

}
