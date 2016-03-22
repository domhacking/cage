import { CREATE, ERROR } from './actionTypes'

export const initialState = {
  error: false,
  errorCode: null,
  registered: false,
  uid: null
}

export default (state = initialState, action) => {

  switch (action.type) {

    case CREATE:
      return Object.assign({}, state, {
        error: false,
        errorCode: null,
        registered: true,
        uid: action.uid
      });

    case ERROR:
      return Object.assign({}, state, {
        error: true,
        errorCode: action.code
      });

    default:
      return state

  }

}
