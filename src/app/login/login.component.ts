import * as AuthActions from './../common/actions/auth';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public auth: FormGroup;
  public message: string;

  public constructor(
    private _fb: FormBuilder,
    private _store: Store<AppState>
  ) {
    this.auth = this._fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  public ngOnInit(): void {
    this._store.select('auth').subscribe((data: Error) => this.message = data.message);
  }

  public login(user: User): void {
    this._store.dispatch(new AuthActions.Login(user));
  }
}

