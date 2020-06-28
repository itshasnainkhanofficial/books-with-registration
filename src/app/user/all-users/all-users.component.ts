import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  users$ : Observable<User[]>;

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this.users$ = this._userService.getUsers();
  }

}
