import { CREATE } from './actionTypes'

export const initialState = {};

export default (state = initialState, action) => {

  switch (action.type) {

    case CREATE:
      return Object.assign({}, state, {
        ref: action.ref
      });

    default:
      return state

  }

}
