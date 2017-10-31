import * as AuthActions from './../actions/auth';
import { Action, ActionReducer } from '@ngrx/store';

export function authReducer(state: User = {}, action: AuthActions.Actions): User | boolean | Error {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS: {
      return true;
    }

    case AuthActions.LOGIN_FAIL: {
      return {...action.payload};
    }

    case AuthActions.LOGOUT_SUCCESS: {
      return false;
    }

    case AuthActions.LOGOUT_FAIL: {
      return {...state};
    }

    default: {
      return state;
    }
  }
}
