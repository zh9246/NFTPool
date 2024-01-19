import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  confirmPassword: string;
  firebaseErrorMessage: string;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {

  }

  ngOnInit(): void {}

  onSubmit() {
    if(this.password != this.confirmPassword)
      this.firebaseErrorMessage = "Password and Confirm Password do not match."
    this.authService.signUpUser(this.email, this.password)
      .then((result) => {
        if (result == null) {
          console.log("Signing Up...");
          this.router.navigate(['/home'])
        }
        else if(result.isValid == false){
          this.firebaseErrorMessage = result.message;
        }
      })
  }
}
