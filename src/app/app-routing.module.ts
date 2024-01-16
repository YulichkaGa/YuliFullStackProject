import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import {CustomersComponent} from "./components/customers/customers.component";
import {AddCustomerComponent} from "./components/add-customer/add-customer.component";
import {EditCustomerComponent} from "./components/edit-customer/edit-customer.component";
import {CustomerDetailsComponent} from "./components/customer-details/customer-details.component";

const routes: Routes = [
  {
    path:'',
    component:CustomersComponent
  },
  {
    path:"customers",
    component:CustomersComponent
  },
  {
    path:"customers/add",
    component:AddCustomerComponent
  }, {
    path: "customers/edit/:id",
    component:EditCustomerComponent

  },
  {
    path: "customers/details/:id",
    component:CustomerDetailsComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
