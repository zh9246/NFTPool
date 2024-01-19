import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;
  firebaseErrorMessage: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}
  ngOnInit(): void {}
  login() {
    this.authService.signInUser(this.email, this.password).then((result) => {
      if (result == null) {
        this.router.navigate(['/home']);
      } else if (result.isValid == false) {
        console.log('login error: ', result);
        this.firebaseErrorMessage = result.message;
      }
    });
  }
}
