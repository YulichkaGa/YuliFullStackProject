import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) {
  }

  getAllCustomers(): Observable<Customer[]> {

    return this.http.get<Customer[]>(this.baseApiUrl + '/api/customers');
  }

  addCustomer(addCustomerRequest: Customer) {
    debugger
    addCustomerRequest.id = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Customer>(this.baseApiUrl + '/api/customers/'+addCustomerRequest.id, addCustomerRequest);
  }

  getCustomer(id: string) {
    debugger
    return this.http.get<Customer>(this.baseApiUrl + '/api/customers/' + id);
  }

  updateCustomer(id: string, updateCustomerRequest: Customer) {
    return this.http.put<Customer>(this.baseApiUrl + '/api/customers/' + id, updateCustomerRequest);

  }

  deleteCustomer(id: string) {
    return this.http.delete<Customer>(this.baseApiUrl + '/api/customers/' + id);

  }
  getCustomerDetails(id: string): Observable<any> {
    return  this.http.get<any>(this.baseApiUrl+"/customers/"+id)


  }
}



