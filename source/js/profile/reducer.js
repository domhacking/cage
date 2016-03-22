import { RECEIVE_REF } from './actionTypes'

export const initialState = {
  ref: null,
  name: '',
  avatar: ''
}

export default (state = initialState, action) => {

  switch (action.type) {

    case RECEIVE_REF:
      return Object.assign({}, state, {
        ref: action.ref,
        ...action.payload
      });

    default:
      return state

  }

}
