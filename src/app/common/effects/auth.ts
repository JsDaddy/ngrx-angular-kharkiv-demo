import { Router } from '@angular/router';
import { LoginService } from './../../shared/services/login.service';
import * as AuthActions from './../actions/auth';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthEffects {

  @Effect()
  public login$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGIN)
    .map((action: AuthActions.Login) => action.payload)
    .switchMap((data: User) => this._loginService.login(data))
    .map((user: User) => new AuthActions.LoginSuccess(user))
    .do(() => this._router.navigate(['/']))
    .catch((err: Error) => {
      // tslint:disable-next-line
      console.log(err);
      return Observable.of(new AuthActions.LoginFail(err));
    });

    @Effect()
    public logout$: Observable<Action> = this.actions$
      .ofType(AuthActions.LOGOUT)
      .switchMap(() => this._loginService.logout())
      .map(() => new AuthActions.LogoutSuccess())
      .do(() => this._router.navigate(['/']))
      .catch((err: Error) => {
        // tslint:disable-next-line
        console.log(err);
        return Observable.of(new AuthActions.LogoutFail());
      });

  public constructor(
    private actions$: Actions,
    private _loginService: LoginService,
    private _router: Router
  ) {}
}

