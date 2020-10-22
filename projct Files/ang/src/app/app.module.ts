import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MypipePipe } from './mypipe.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent , MypipePipe, EmployeeComponent, CompanyComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
