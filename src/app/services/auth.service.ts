import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userLoggedIn: boolean;
  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.userLoggedIn = false;

    this.afAuth.onAuthStateChanged((user) => {
      if (user) this.userLoggedIn = true;
      else this.userLoggedIn = false;
    });
  }

  signUpUser(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        let emailLower = email.toLowerCase();
        result.user?.sendEmailVerification();
      })
      .catch((error) => {
        console.log('Auth Service: Sign Up Error', error);
        if (error.code) return { isValid: false, message: error.message };
        return { isValid: false, message: 'Unknown Error' };
      });
  }
  signInUser(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('Auth Service: loginUser: Success');
      })
      .catch((error) => {
        console.log('Auth Service: Login Error...');
        console.log('error code:', error.code);
        console.log('error:', error);
        if (error.code) return { isValid: false, message: error.message };
        return { isValid: false, message: 'Unknown Error' };
      });
  }
}
