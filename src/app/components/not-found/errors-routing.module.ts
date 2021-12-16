import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { AccessDeniedComponent } from './../access-denied/access-denied.component';

const routes: Routes = [  
  { path: '403', component: AccessDeniedComponent },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }