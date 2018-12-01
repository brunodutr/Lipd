import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AngularFireauthNutri } from './nutri.firestore';

@Injectable()
export class AuthService {
  logged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private _fireAuth: AngularFireauthNutri,
    private localStorage: LocalStorage,
    private router: Router
  ) {
    this.isAuthenticate().then(value => {
      this.logged.next(value);
    });
  }

  async getUID() {
    let user = await this._fireAuth.authState.pipe(take(1)).toPromise();
    return user.uid;
  }

  isAuthenticate(): Promise<boolean> {
    return new Promise(resolve => {
      let canActivate: boolean = false;

      this._fireAuth.authState.subscribe(user => {
        if (user) canActivate = true;
        resolve(canActivate);
      });
    });
  }

  login(email: string, senha: string) {
    return this._fireAuth.auth
      .signInWithEmailAndPassword(email, senha)
      .then(() => this.logged.next(true));
  }

  logout(): Promise<boolean> {
    return new Promise(resolve => {
      this._fireAuth.auth.signOut().then(() => {
        this.logged.next(false);
        resolve(true);
      });
    });
  }
}
