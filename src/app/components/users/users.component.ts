import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private users_service: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsers();
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

  selectUser(id: number, name: string){
    if(this.selected_user_id === id){
      this.router.navigate(['users'])
    }
    else{
      this.router.navigate(['users', id, name]);
      this.selected_user_id = id;
    }
  }
}
