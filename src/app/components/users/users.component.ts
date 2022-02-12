import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, range } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

interface IUser{
  id: number
  first_name: string,
  last_name: string,
  gender: string,
  age: number
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})

export class UsersComponent implements OnInit {
  users: IUser[] = []
  selected_user_id: number = NaN;
  constructor(private users_service: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();

    // const o = range(10,100).pipe(filter(n => n > 50)).subscribe(data => console.log(data))
  }

  getUsers(){
    this.users_service.getUsers()
    .subscribe({
      next: (responce:any) => {      
        this.users = responce;
      },
      error: err => console.log(err)
    })
  }

  addUser(){
    this.users_service.addUser()
    .subscribe(x => console.log(x))
  }

  selectUser(data: any){
    if(this.selected_user_id === data.id){
      this.router.navigate(['users'])
      this.selected_user_id = NaN;
    }
    else{
      this.router.navigate(['users', data.id, data.name]);
      this.selected_user_id = data.id;
    }
  }

  deleteUser(id:any){    
    this.users_service.deleteUser(id)
    .then(() => {
      this.users = this.users.filter((user) => {
        return user.id !== id;
      })
    })
    .catch(err => console.log(err))
  }
}
