import { UsersService } from './../../../services/user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  addUser: Boolean = false;
  users: Array<User> = [
    new User(1, "first", "last", "email"),
    new User(2, "first", "last", "email"),
    new User(3, "first", "last", "email")
  ];

  constructor(private _userService: UsersService) { }

  ngOnInit() {
  /*   this.getUsers(); */
  }

  create(user: User) {
    this.users.push(user);
  }

  destroy(user: User) {
    let i =this.users.indexOf(user);
    this.users.splice(i, 1)
  }

  update(users: any) {
    console.log(users);
    let i = this.users.indexOf(users.original);
    this.users[i] = users.edited;
  }

  /* getUsers() {
    this._userService.getUsers()
    .then(users => this.users = users)
  }
 */
  
}
