import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}
  logout() {
    this.router.navigate(['signin']);
    this.afAuth.signOut();
  }
  goToSignUp() {
    this.router.navigate(['/signup']);
  }
  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
