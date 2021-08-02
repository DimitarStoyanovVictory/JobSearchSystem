import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { ClickOutsideDirective } from './customDirectives/clickOutside.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompanyComponent } from './components/shared/company/company.component';
import { EmployeeComponent } from './components/shared/employee/employee.component';
import { SuccessComponent } from './components/shared/messages/success/success.component';
import { ErrorComponent } from './components/shared/messages/error/error.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CompanyComponent,
    EmployeeComponent,
    ClickOutsideDirective,
    SuccessComponent,
    ErrorComponent,
    HomeComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }