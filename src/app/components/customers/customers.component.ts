import {Component, OnInit} from '@angular/core';
import {Customer} from "../../models/customer.model";
import {CustomersService} from "../../services/customers.service";
import {response} from "express";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomersService) {
  }


  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(
      {
        next: (customers) => {
          this.customers = customers;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  clickCustomer(idCustomer: string) {
    this.customerService.getCustomerDetails(idCustomer)
      .subscribe({
        next: (customers: Customer[]) => {
          this.customers = customers;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }
}
