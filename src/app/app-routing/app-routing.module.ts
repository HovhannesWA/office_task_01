import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { LoginComponent } from './../components/login/login.component';
import { RegistrationComponent } from './../components/registration/registration.component';
import { UsersComponent } from './../components/users/users.component';
import { UserComponent } from './../components/user/user.component';
import { NotFoundComponent } from './../components/not-found/not-found.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { AccessDeniedComponent } from '../components/access-denied/access-denied.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'users', component: UsersComponent, children: [{path: ':id/:name', component: UserComponent}], canActivate: [AuthGuard] },
  // { path: 'user/:id/:name', component: UserComponent },
  { path: '403', component: AccessDeniedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }