import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.scss']
})
export class SuperadminComponent implements OnInit {

  // variable
  userName: string;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    this.userName = sessionStorage.getItem("username");
    console.log(this.userName);
  }

  // logout
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
