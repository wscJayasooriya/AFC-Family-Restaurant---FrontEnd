import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerRegister} from '../dtos/customerRegister';
import {Observable} from 'rxjs/index';
import {Employee} from '../dtos/employee';

export const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/client-Login';

@Injectable()
export class CustomerRegisterService {

  constructor(private  http: HttpClient) { }

  saveCustomer(cusRegister: CustomerRegister): Observable <boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, cusRegister);
  }

  // getAllCustomers(): Observable<Array<CustomerRegister>> {
  //   return this.http.get<Array<CustomerRegister>>(MAIN_URL + URL);
  // }


}
