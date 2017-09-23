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

export const firebaseConfig =  {
    apiKey: "AIzaSyAYF280pQVmx4NW3Yy6lXrMSGrNwN3bvN8",
    authDomain: "wv-emp-dir.firebaseapp.com",
    databaseURL: "https://wv-emp-dir.firebaseio.com",
    projectId: "wv-emp-dir",
    storageBucket: "wv-emp-dir.appspot.com",
    messagingSenderId: "342434844061"
};

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sales', component: SalesComponent },
    { path: 'onboarding', component: OnboardingComponent },
    { path: 'csm', component: CsmsComponent },
    { path: 'support', component: SupportComponent },
    { path: 'training', component: TrainingComponent },
    { path: 'hr-finance', component: HrFinanceComponent }
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
    HrFinanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    InlineSVGModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
