import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { UsersService } from 'src/app/services/users.service';
import { TABLEComponent } from '../table/table.component';
import { UserComponent } from '../user/user.component';
import { UsersRoutingModule } from '../../routes/users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent, TABLEComponent, UserComponent],
  providers: [UsersService],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class UsersModule {}
