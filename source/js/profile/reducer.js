import { TEST } from './actionTypes'

export const initialState = {
  name: 'nick',
  imageUrl: 'http://bit.ly/1OFEpYv'
}

export default (state = initialState, action) => {

  switch (action.type) {

    case TEST:
      return Object.assign({}, state, {
        imageUrl: 'http://i.imgur.com/kZOMq.png',
        name: 'test'
      });

    default:
      return state

  }

}
