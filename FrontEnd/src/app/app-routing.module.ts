import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/shared/company/company.component';
import { EmployeeComponent } from './components/shared/employee/employee.component';
import { SuccessComponent } from './components/shared/messages/success/success.component';
import { ErrorComponent } from './components/shared/messages/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CompanyComponent, EmployeeComponent]