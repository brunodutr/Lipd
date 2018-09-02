import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { DiariosProvider } from '../providers/services-diarios/services-diarios';

@Injectable()
export class AuthService {
  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  signInWithEmail(credentials) {
    console.log('Sign in with email');
    return this.afAuth.auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  async getUserInfo() {
    let usuario = {
      nome: this.user.displayName ? this.user.displayName : 'NOME',
      foto: this.user.photoURL
        ? this.user.photoURL
        : `assets/imgs/personas/${this.user.uid}.jpg`,
      email: this.user.email
    };
    return usuario;
  }
  get authenticated(): boolean {
    return this.user !== null;
  }

  getUID() {
    return this.user.uid;
  }
  getEmail() {
    return this.user && this.user.email;
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
