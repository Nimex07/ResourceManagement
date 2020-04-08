import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookingdetailsService } from '../bookingdetails.service';
import { Bookingdetails } from '../bookingdetails';
import { ResourcedetailsService } from '../resourcedetails.service';
import { Resourcedetails } from '../resourcedetails';

@Component({
  selector: 'app-add-bookingdetails',
  templateUrl: './add-bookingdetails.component.html',
  styleUrls: ['./add-bookingdetails.component.scss']
})
export class AddBookingdetailsComponent implements OnInit {

  booking: Bookingdetails = new Bookingdetails();
  addBookingForm: FormGroup;
  addResourceForm: FormGroup;
  todate = new Date();
  resourceId: number;
  res: Resourcedetails;

  constructor(private formBuilder: FormBuilder,
    private bookingService: BookingdetailsService,
    private resourceDetailsService: ResourcedetailsService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    // getting value passed in url
    this.resourceId = this.route.snapshot.params['resourceId'];
    this.createForm();

    this.resourceDetailsService.searchById(this.resourceId).subscribe(
      data => this.res = data,
      error => console.log(error)
    );
  }

  name = "[a-zA-Z ]*";
  address = "[a-zA-Z0-9 ]*";
  phoneNumber = "^((\\+91-?)|0)?[0-9]{10}$";

  createForm() {

    this.addBookingForm = this.formBuilder.group({
      custName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern(this.name)]],
      custAddress: ['', [Validators.required, Validators.pattern(this.address), Validators.maxLength(50)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.phoneNumber)]],
      email: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      purpose: ['', Validators.required],
    });

    this.addResourceForm = this.formBuilder.group({
      resourceId: [this.resourceId],
    });
  }

  onSubmit() {

    // setting value
    this.booking.resourceDetails = this.addResourceForm.value;
    this.booking.custName = this.addBookingForm.controls.custName.value;
    this.booking.custAddress = this.addBookingForm.controls.custAddress.value;
    this.booking.phoneNumber = this.addBookingForm.controls.phoneNumber.value;
    this.booking.email = this.addBookingForm.controls.email.value;
    this.booking.startDate = this.addBookingForm.controls.startDate.value;
    this.booking.endDate = this.addBookingForm.controls.endDate.value;
    this.booking.purpose = this.addBookingForm.controls.purpose.value;
    this.booking.bookingStatus = "";
    this.booking.pending = "Y";

    // insert
    this.bookingService.addBooking(this.booking).subscribe(
      data => console.log(data),
      error => console.log(error)
    );

    // calling method
    this.updateBookedResource();
    // toastr message
    this.toastr.success('New Resource Successfully Booked', 'Booking Resource');
    this.router.navigateByUrl("");
  }
  // updating isBooked in ResourceDetails
  updateBookedResource() {
    // setting value
    this.res.isBooked = "Y";
    // calling update
    this.resourceDetailsService.updateResource(this.res).subscribe(
      data => console.log(data), error => console.log(error)
    );
  }
}
