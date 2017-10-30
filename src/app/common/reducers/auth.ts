import * as AuthActions from './../actions/auth';
import { Action, ActionReducer } from '@ngrx/store';

export function authReducer(state: User = {}, action: any): User | boolean {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS: {
      return {...action.payload};
    }

    case AuthActions.LOGIN_FAIL: {
      return {...action.payload};
    }

    case AuthActions.LOGOUT_SUCCESS: {
      return false;
    }

    case AuthActions.LOGIOUT_FAIL: {
      return {...state};
    }

    default: {
      return state;
    }
  }
}
