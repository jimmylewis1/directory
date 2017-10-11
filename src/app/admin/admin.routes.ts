import { Routes } from '@angular/router';

import { AdminOnboardingComponent } from './depts/admin-onboarding/admin-onboarding.component';
import { AdminHomeComponent } from "./depts/admin-home/admin-home.component";
import {AdminCsmComponent } from "./depts/admin-csm/admin-csm.component";
import { AdminExecutivesComponent } from "./depts/admin-executives/admin-executives.component";
import { AdminHrFinanceComponent } from "./depts/admin-hr-finance/admin-hr-finance.component";
import { AdminSalesComponent } from "./depts/admin-sales/admin-sales.component";
import { AdminSupportComponent } from "./depts/admin-support/admin-support.component";
import { AdminTrainingComponent } from "./depts/admin-training/admin-training.component";


export const AdminRoutes: Routes = [
    { path: 'admin-home', component: AdminHomeComponent, data: {title: 'Admin-Home'} },
    { path: 'admin-onboarding', component: AdminOnboardingComponent, data: { title: 'Admin-Onboarding' } },
    { path: 'admin-csm', component: AdminCsmComponent, data: { title: 'Admin-CSMs' } },
    { path: 'admin-executives', component: AdminExecutivesComponent, data: { title: 'Admin-Executives' } },
    { path: 'admin-hr-finance', component: AdminHrFinanceComponent, data: { title: 'Admin-HR-Finance' } },
    { path: 'admin-sales', component: AdminSalesComponent, data: { title: 'Admin-Sales' } },
    { path: 'admin-support', component: AdminSupportComponent, data: { title: 'Admin-Support' } },
    { path: 'admin-training', component: AdminTrainingComponent, data: { title: 'Admin-training' } }
];
