import { Component } from '@angular/core';
import {CustomersService} from "../../services/customers.service";
import {Customer} from "../../models/customer.model";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {
  customers: Customer[] = [];

  constructor(private customerService: CustomersService) {
  }
}
