import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class LoginService {

  public constructor(public afAuth: AngularFireAuth) {}

  public login(data: User): Observable<User> {
    const { email, password } = data;
    return Observable.fromPromise(
      firebase.auth().signInWithEmailAndPassword(email, password)
    );
  }

  public logout(): Observable<User> {
    return Observable.fromPromise(
      this.afAuth.auth.signOut()
    );
  }
}
