import {Component, OnInit} from '@angular/core';
import {Customer} from "../../models/customer.model";
import {CustomersService} from "../../services/customers.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent  implements  OnInit {

  addCustomerRequest: Customer = {
    id: '',
    name: '',
    hp: ''
  }

  constructor(private customerService: CustomersService, private router:Router) {
  }

  ngOnInit(): void {
  }

  addCustomer() {
    this.customerService.addCustomer(this.addCustomerRequest)
      .subscribe({
        next: (custom) => {
          this.router.navigate(['customers']).then(()=>  {window.location.reload();});

        }
      });
  }
}
