import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddResourcetypeComponent } from './add-resourcetype/add-resourcetype.component';
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
import { ManagerComponent } from './manager/manager.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "resourceDetails/:resourceId", component: ResourcedetailsComponent },
  { path: "bookingForm/:resourceId", component: AddBookingdetailsComponent },
  { path: "login", component: LoginComponent },

  {
    path: "admin", component: AdminComponent,
    children: [
      { path: "addResourceType", component: AddResourcetypeComponent },
      { path: "viewResourceType", component: ViewResourcetypeComponent },
      { path: "updateResourceType/:resourceId", component: UpdateResourcetypeComponent },
      { path: "addResourceDetails", component: AddResourcedetailsComponent },
      { path: "viewResourceDetails", component: ViewResourcedetailsComponent },
      { path: "viewBookingDetails", component: ViewBookingdetailsComponent },
      { path: "bookingDetails/:bookingid", component: BookingdetailsComponent },
      { path: "updateResourceDetails/:resourceId", component: UpdateResourcedetailsComponent }
    ]
  },

  {
    path: "manager", component: ManagerComponent,
    children: [
      { path: "barChart/:resourceId", component: BarChartComponent },
      { path: "viewReport", component: ViewReportComponent },
    ]
  },

  {
    path: "superadmin", component: SuperadminComponent,
    children: [
      { path: "viewUsers", component: ListUserComponent },
      { path: "addUser", component: AddUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
