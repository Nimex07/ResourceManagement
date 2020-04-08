import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookingdetailsComponent } from './add-bookingdetails.component';

describe('AddBookingdetailsComponent', () => {
  let component: AddBookingdetailsComponent;
  let fixture: ComponentFixture<AddBookingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
