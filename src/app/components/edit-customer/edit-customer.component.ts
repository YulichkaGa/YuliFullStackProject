import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomersService} from "../../services/customers.service";
import {response} from "express";
import {Customer} from "../../models/customer.model";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})
export class EditCustomerComponent implements  OnInit {
  customerDetails: Customer = {
    id: '',
    name: '',
    hp: ''
  }


  constructor(private route: ActivatedRoute, private customerService: CustomersService, private router: Router) {

  }

  editCustomer() {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({

      next: (params) => {
        const id = params.get('id');
        if (id) {
          //call api
          this.customerService.getCustomer(id).subscribe({
            next: (response) => {
              this.customerDetails = response;
            },
            error: (response) => {

              console.log(response);
            }
          })

        }
      }
    })
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customerDetails.id, this.customerDetails).subscribe({
      next: (response) => {
        this.router.navigate(['customers']).then(() => {
          window.location.reload();
        });
      }
    });
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customerDetails.id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['customers']).then(() => {
            window.location.reload();
          });
        }
      });
  }
}
