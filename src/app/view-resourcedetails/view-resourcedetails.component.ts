import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourcedetailsService } from '../resourcedetails.service';
import { Resourcedetails } from '../resourcedetails';
import { Router } from '@angular/router';
import { Resource } from '../resource';
import { ResourceService } from '../resource.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-resourcedetails',
  templateUrl: './view-resourcedetails.component.html',
  styleUrls: ['./view-resourcedetails.component.scss']
})
export class ViewResourcedetailsComponent implements OnInit {

  p: number = 1;
  resources: Observable<Resourcedetails[]>;
  resourceType: Observable<Resource[]>;
  searchResource: FormGroup;
  resourceTypeId: number;

  constructor(private resourceDetailsService: ResourcedetailsService,
    private resourceService: ResourceService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.getResourceDetails();
    this.getResources();
    this.searchResource = this.formBuilder.group({
      resourceTypeId: ['', Validators.required],
    });
  }
  // method to search
  onSubmit(){
    this.resourceTypeId= this.searchResource.controls.resourceTypeId.value;
    console.log(this.resourceTypeId)
    this.resources = this.resourceDetailsService.searchResource(this.resourceTypeId);
  }
  
  // get resourcetype
  getResources() {
    this.resourceType = this.resourceService.getResourceList();
  }

  getResourceDetails() {
    this.resources = this.resourceDetailsService.getResourceDetails();
  }

  editResource(resourceId: number) {
    this.router.navigate(['/admin/updateResourceDetails', resourceId]);
  }


}
