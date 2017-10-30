import { Action } from '@ngrx/store';

export const LOGIN: string = '[Login] Login ..';
export const LOGIN_SUCCESS: string = '[Login] login Success';
export const LOGIN_FAIL: string = '[Login] login Fail';
export const LOGOUT: string = '[Logout] Logout ..';
export const LOGOUT_SUCCESS: string = '[Login] Logout Success';
export const LOGIOUT_FAIL: string = '[Login] Logout Fail';

export class Login implements Action {
  public readonly type: string = LOGIN;
  public constructor(public payload: User) { }
}

// tslint:disable-next-line
export class LoginSuccess implements Action {
  public readonly type: string = LOGIN_SUCCESS;
  public constructor(public payload: User) { }
}

// tslint:disable-next-line
export class LoginFail implements Action {
  public readonly type: string = LOGIN_FAIL;
  public constructor(public payload: Error) { }
}

// tslint:disable-next-line
export class Logout implements Action {
  public readonly type: string = LOGOUT;
  // public constructor() { }
}

// tslint:disable-next-line
export class LogoutSuccess implements Action {
  public readonly type: string = LOGOUT_SUCCESS;
  public constructor() { }
}

// tslint:disable-next-line
export class LogoutFail implements Action {
  public readonly type: string = LOGIOUT_FAIL;
  public constructor() { }
}

export type Actions
  = Login
  | LoginSuccess
  | LoginFail
  | Logout
  | LogoutSuccess
  | LogoutFail;

