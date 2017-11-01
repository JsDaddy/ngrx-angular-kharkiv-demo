import * as AuthActions from './../../../common/actions/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../common/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: User;

  public amount$: Observable<number>;

  public constructor(
    private _store: Store<AppState>,
    private afAuth: AngularFireAuth,
  ) {}

  public ngOnInit(): void {
    this.amount$ = this._store.select(fromRoot.getCartAmount);
    this.afAuth.authState.subscribe((user: User) => this.user = user);
  }

  public logout(): void {
    this._store.dispatch(new AuthActions.Logout());
  }
}
