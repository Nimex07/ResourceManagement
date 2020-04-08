import { Component, OnInit } from '@angular/core';
import { ResourcedetailsService } from '../resourcedetails.service';
import { Resourcedetails } from '../resourcedetails';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Resource } from '../resource';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  onSubmit() {
    this.resourceTypeId = this.searchResource.controls.resourceTypeId.value;
    console.log(this.resourceTypeId)
    this.resources = this.resourceDetailsService.searchResourceActive(this.resourceTypeId);
  }

  // get resourcetype
  getResources() {
    this.resourceType = this.resourceService.getResourceList();
  }

  // method to get all details
  getResourceDetails() {
    this.resources = this.resourceDetailsService.getActiveResources();
    console.log(this.resources);
  }

  // method to view more details
  viewResource(resourceId: number) {
    // link
    this.router.navigate(['/resourceDetails', resourceId]);
  }

}
