import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

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
