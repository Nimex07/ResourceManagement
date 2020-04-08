import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddResourcetypeComponent } from './add-resourcetype/add-resourcetype.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ViewResourcetypeComponent } from './view-resourcetype/view-resourcetype.component';
import { UpdateResourcetypeComponent } from './update-resourcetype/update-resourcetype.component';
import { AddResourcedetailsComponent } from './add-resourcedetails/add-resourcedetails.component';
import { ViewResourcedetailsComponent } from './view-resourcedetails/view-resourcedetails.component';
import { UpdateResourcedetailsComponent } from './update-resourcedetails/update-resourcedetails.component';
import { ResourcedetailsComponent } from './resourcedetails/resourcedetails.component';
import { AddBookingdetailsComponent } from './add-bookingdetails/add-bookingdetails.component';
import { ViewBookingdetailsComponent } from './view-bookingdetails/view-bookingdetails.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { AuthconfigInterceptor } from './authconfig.interceptor';
import { AddUserComponent } from './add-user/add-user.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    AddResourcetypeComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ViewResourcetypeComponent,
    UpdateResourcetypeComponent,
    AddResourcedetailsComponent,
    ViewResourcedetailsComponent,
    UpdateResourcedetailsComponent,
    ResourcedetailsComponent,
    AddBookingdetailsComponent,
    ViewBookingdetailsComponent,
    BookingdetailsComponent,
    BarChartComponent,
    ViewReportComponent,
    AddUserComponent,
    SuperadminComponent,
    ListUserComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule, NgxPaginationModule,
    ToastrModule.forRoot(),
    ChartsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthconfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
