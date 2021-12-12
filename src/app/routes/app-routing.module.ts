import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { AccessDeniedComponent } from '../components/access-denied/access-denied.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' }, 
  { path: 'users', loadChildren: () => import('./../components/users/users.module').then(m => m.UsersModule)},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },  
  { path: '403', component: AccessDeniedComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }