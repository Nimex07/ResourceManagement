import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<any> {
    return this.httpClient.get(environment.apiurl + "/user");
  }

  addUser(user: Object): Observable<any> {
    return this.httpClient.post(environment.apiurl + "/user", user);
  }

  getUser(id: number): Observable<any> {
    return this.httpClient.get(environment.apiurl + "/searchUser/" + id);
  }

  updateUser(user: User): Observable<any> {
    return this.httpClient.put(environment.apiurl + "/user", user);
  }
}
