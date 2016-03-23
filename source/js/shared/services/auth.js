// Auth service to check authenticated users accessing protected routes

import { isLoggedIn } from './firebase';

export function requireAuth(nextState, replace) {

  if (!isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }

}
