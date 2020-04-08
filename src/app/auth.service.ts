import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Jwtresponse } from './jwtresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient,
    private router: Router) { }

  public loginVerify(user: User) {
    // calling webservice url and passing username and password
    console.log(user);
    return this.httpClient.post<Jwtresponse>(environment.apiurl + "/authenticate", user);
  }

  public isLoggedIn() {
    if (sessionStorage.getItem('ACCESS_ADMIN') == null && sessionStorage.getItem('ACCESS_MGR') == null && sessionStorage.getItem('ACCESS_SUPADMIN') == null) {
      this.router.navigateByUrl('/login');
    }
    else {
      return;  //localStorage.getItem('ACCESS_ADMIN') !== null;
    }
  }

  public logout() {
    sessionStorage.removeItem('ACCESS_ADMIN');
    sessionStorage.removeItem('ACCESS_MGR');
    sessionStorage.removeItem('ACCESS_SUPADMIN');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }
}
