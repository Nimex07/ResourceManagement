import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { first } from 'rxjs/operators';
import { User } from '../user';
import { Jwtresponse } from '../jwtresponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  jwtResponse: Jwtresponse;
  error = '';

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }


  ngOnInit(): void {
    // checking if user logged in or not
    if (sessionStorage.getItem('ACCESS_ADMIN') !== null)
      this.router.navigateByUrl('/admin');
    else if (sessionStorage.getItem('ACCESS_MGR') !== null)
      this.router.navigateByUrl('/manager');
    else if (sessionStorage.getItem('ACCESS_SUPADMIN') !== null)
      this.router.navigateByUrl('/superadmin');

    // formGroup 
    this.loginForm = this.formBuilder.group({

      userName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required]]

    });
  }
  get formControls() { return this.loginForm.controls; }

  login() {

    this.isSubmitted = true

    //invalid entry in form
    if (this.loginForm.invalid)
      return;

    // valid entry
    if (this.loginForm.valid) {

      //calling method from AuthService
      this.authService.loginVerify(this.loginForm.value).subscribe(data => {
        this.jwtResponse = data;

        sessionStorage.setItem("token", data.token);
        //checking roleId
        if (data.roleId === 1) {
          // logged as Manager
          sessionStorage.setItem("ACCESS_MGR", "logged");
          sessionStorage.setItem("username", data.userName);
          this.router.navigateByUrl('/manager');

        }
        else if (data.roleId === 2) {
          // logged as Admin/Cordinator
          sessionStorage.setItem("ACCESS_ADMIN", "logged");
          sessionStorage.setItem("username", data.userName);
          this.router.navigateByUrl('/admin');
        }
        else if (data.roleId === 3) {
          // logged as Super admin
          sessionStorage.setItem("ACCESS_SUPADMIN", "logged");
          sessionStorage.setItem("username", data.userName);
          this.router.navigateByUrl('/superadmin');
        }
        else {
          this.error = "Sorry... This Role is Not Allowed To Access This System"
        }
      },
        error => {
          this.error = "Invalid Username and Password"
        });
    }
    else
      return;
  }
}
