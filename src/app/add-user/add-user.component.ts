import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoledetailsService } from '../roledetails.service';
import { Roledetails } from '../roledetails';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: User;
  submitted = false;
  addUserForm: FormGroup;
  roleForm: FormGroup;
  roles: Observable<Roledetails[]>;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private roleService: RoledetailsService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.createForm();
    this.getRoleDetails();
    console.log(this.roles);
  }

  getRoleDetails() {
    this.roles = this.roleService.getRoleList();

  }
  createForm() {

    this.addUserForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.roleForm = this.formBuilder.group({
      roleId: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    //assigning values into loginUser
    this.user = this.addUserForm.value
    this.user.roleDetails = this.roleForm.value;

    //calling method in service to insert
    this.userService.addUser(this.user).subscribe(data => console.log(data), error => console.log(error));
    this.toastr.success('New User Successfully Created', 'User Management System');
    this.router.navigateByUrl('/superadmin/viewUsers');

  }


}
