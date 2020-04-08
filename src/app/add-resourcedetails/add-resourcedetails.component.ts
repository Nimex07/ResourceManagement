import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resourcedetails } from '../resourcedetails';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResourcedetailsService } from '../resourcedetails.service';
import { Resource } from '../resource';
import { ResourceService } from '../resource.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-resourcedetails',
  templateUrl: './add-resourcedetails.component.html',
  styleUrls: ['./add-resourcedetails.component.scss']
})
export class AddResourcedetailsComponent implements OnInit {

  addResourceForm: FormGroup;
  res: Resourcedetails = new Resourcedetails();
  resourceType: Observable<Resource[]>;
  addResourceType: FormGroup;
  selectedFile=null;

  constructor(private formBuilder: FormBuilder,
    private resourceDetailsService: ResourcedetailsService,
    private resourceService: ResourceService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createForm();
    this.getResources();
  }

  createForm() {

    this.addResourceType = this.formBuilder.group({
      resourceTypeId: ['', Validators.required],
    });

    this.addResourceForm = this.formBuilder.group({

      resourceCapacity: ['', Validators.required],
      noOfSystems: ['', Validators.required],
      projector: ['', Validators.required],
      whiteBoard: ['', Validators.required],
      resourceRate: ['', Validators.required],
      picture: ['']

    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    // assigning values into resource from fromGroup
    // this.res = this.addResourceForm.value;
    console.log(this.addResourceForm.value);
    // console.log(this.addResourceForm.controls.resourceTypeId.value);

    //setting values
    this.res.resource = this.addResourceType.value;
    this.res.resourceCapacity = this.addResourceForm.controls.resourceCapacity.value;
    this.res.noOfSystems = this.addResourceForm.controls.noOfSystems.value;
    this.res.projector = this.addResourceForm.controls.projector.value;
    this.res.whiteBoard = this.addResourceForm.controls.whiteBoard.value;
    this.res.resourceRate = this.addResourceForm.controls.resourceRate.value;

    this.res.typeOfUse = "";
    this.res.isActive = "Y";
    this.res.isAccepted = "N";
    this.res.isBooked = "N";

    console.log(this.selectedFile);



    // calling method to insert
    /*    this.resourceDetailsService.createResource(this.res).subscribe(
          data => console.log(data), error => console.log(error)
        );*/
    this.toastr.success('New Resource Successfully Created', 'Creating ResourceType');
    this.router.navigateByUrl('/admin/viewResourceDetails');
  }

  getResources() {

    this.resourceType = this.resourceService.getResourceList();
    console.log(this.resourceType);
  }

}
