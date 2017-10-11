import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SalesComponent } from './sales/sales.component';
import { HttpService } from "./services/http.service";
import { OnboardingComponent } from './onboarding/onboarding.component';
import { SupportComponent } from './support/support.component';
import { CsmsComponent } from './csms/csms.component';
import { TrainingComponent } from './training/training.component';
import { HrFinanceComponent } from './hr-finance/hr-finance.component';

import { AdminRoutes } from "./admin/admin.routes";

//Admin
import { AdminOnboardingComponent } from "./admin/depts/admin-onboarding/admin-onboarding.component";
import { AdminHomeComponent } from './admin/depts/admin-home/admin-home.component';
import { AdminExecutivesComponent } from './admin/depts/admin-executives/admin-executives.component';
import { AdminSalesComponent } from './admin/depts/admin-sales/admin-sales.component';
import { AdminSupportComponent } from './admin/depts/admin-support/admin-support.component';
import { AdminCsmComponent } from './admin/depts/admin-csm/admin-csm.component';
import { AdminHrFinanceComponent } from './admin/depts/admin-hr-finance/admin-hr-finance.component';
import { AdminTrainingComponent } from './admin/depts/admin-training/admin-training.component';
import { ExecutivesComponent } from './executives/executives.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';

export const firebaseConfig =  {
    apiKey: "AIzaSyAYF280pQVmx4NW3Yy6lXrMSGrNwN3bvN8",
    authDomain: "wv-emp-dir.firebaseapp.com",
    databaseURL: "https://wv-emp-dir.firebaseio.com",
    projectId: "wv-emp-dir",
    storageBucket: "wv-emp-dir.appspot.com",
    messagingSenderId: "342434844061"
};

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Home' } },
    { path: 'sales', component: SalesComponent, data: { title: 'Sales' } },
    { path: 'onboarding', component: OnboardingComponent, data: { title: 'Onboarding' } },
    { path: 'csm', component: CsmsComponent, data: { title: 'CSMs' } },
    { path: 'support', component: SupportComponent, data: { title: 'Support' } },
    { path: 'training', component: TrainingComponent, data: { title: 'Training' } },
    { path: 'hr-finance', component: HrFinanceComponent, data: { title: 'HR / Finance' } },
    { path: 'executives', component: ExecutivesComponent, data: { title: 'Executives' } },

    //Admin paths
    { path: 'admin', component: AdminComponent, data: { title: 'Admin' } },
    { path: 'admin/', component: AdminComponent, children: AdminRoutes, data: { title: 'Admin' } },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeesComponent,
    HomeComponent,
    NavigationComponent,
    SalesComponent,
    OnboardingComponent,
    SupportComponent,
    CsmsComponent,
    TrainingComponent,
    HrFinanceComponent,
    AdminOnboardingComponent,
    AdminHomeComponent,
    AdminExecutivesComponent,
    AdminSalesComponent,
    AdminSupportComponent,
    AdminCsmComponent,
    AdminHrFinanceComponent,
    AdminTrainingComponent,
    ExecutivesComponent,
    AdminNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(AdminRoutes),
    NgbModule.forRoot(),
    InlineSVGModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
