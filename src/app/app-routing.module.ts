import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import {
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/compat/auth-guard';
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'signup',
    component: SignupComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'signin',
    component: SigninComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  { path: '**', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
