/* tslint:disable */
import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] Login ..';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] login Fail';
export const LOGOUT = '[Auth] Logout ..';
export const LOGOUT_SUCCESS = '[Auth] Logout Success';
export const LOGOUT_FAIL = '[Auth] Logout Fail';

export class Login implements Action {
  public readonly type = LOGIN;
  public constructor(public payload: User) { }
}

export class LoginSuccess implements Action {
  public readonly type = LOGIN_SUCCESS;
  public constructor(public payload: User) { }
}

export class LoginFail implements Action {
  public readonly type = LOGIN_FAIL;
  public constructor(public payload: Error) { }
}

export class Logout implements Action {
  public readonly type = LOGOUT;
}

export class LogoutSuccess implements Action {
  public readonly type = LOGOUT_SUCCESS;
}

export class LogoutFail implements Action {
  public readonly type = LOGOUT_FAIL;
}

export type Actions
  = Login
  | LoginSuccess
  | LoginFail
  | Logout
  | LogoutSuccess
  | LogoutFail;

