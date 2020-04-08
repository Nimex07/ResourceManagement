import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users: Observable<User[]>;
  p: number = 1;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

    this.listUsers();
  }

  listUsers() {
    this.users = this.userService.getUserList();
    console.log(this.users);
  }

}
