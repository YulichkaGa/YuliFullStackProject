import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import {HttpClientModule} from "@angular/common/http";
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import {FormsModule} from "@angular/forms";
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
