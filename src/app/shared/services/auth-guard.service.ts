import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuardService implements CanActivate {

  public constructor(
    private afAuth: AngularFireAuth,
    private _router: Router,
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.afAuth.authState
      .take(1)
      .switchMap((user: firebase.User) => {
        if (!user) {
          this._router.navigate(['/login']);
          return Observable.of(false);
        }
        return Observable.of(true);
      });
  }
}
