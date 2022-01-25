import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { MainLayoutComponent } from 'src/app/layouts/main-layout/main-layout.component';
import { UserComponent } from './../user/user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,      
    children: [
      {
        path: '', component: UsersComponent,      
        children: [{ path: ':id/:name', component: UserComponent }],
        canActivate: [AuthGuard],
      }
    ],
    canActivate: [AuthGuard],
  },  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule { }