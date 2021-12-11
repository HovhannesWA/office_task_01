import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { AccessDeniedComponent } from '../components/access-denied/access-denied.component';

const routes: Routes = [  
  { path: '403', component: AccessDeniedComponent },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }