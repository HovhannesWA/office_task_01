import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { UserComponent } from '../components/user/user.component';
import { UsersComponent } from '../components/users/users.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent,    
    children: [{ path: ':id/:name', component: UserComponent }],
    canActivate: [AuthGuard],
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule { }