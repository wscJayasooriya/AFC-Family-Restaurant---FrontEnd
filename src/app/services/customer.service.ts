import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Customer} from '../dtos/customer';

export const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/customers';

@Injectable()
export class CustomerService {

  constructor(private  http: HttpClient, private router: Router) { }

  saveCustomer(cusRegister: Customer): Observable <boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, cusRegister);
  }
  login(cusRegister: Customer): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, cusRegister)
      .pipe(
        map((result) => {
          sessionStorage.setItem('token', result + '');
          if (result) {
            this.router.navigate(['client-login']);
          }
          return result;
        })
      );
  }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token')) {
      return sessionStorage.getItem('token') === 'false' ? false : true;
    }
  }
  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['/nevigation/homepage']);
  }
  getCustomer(customerName: string): Observable<Customer> {
    return this.http.get<Customer>(MAIN_URL + URL + '/' + customerName);
  }

}
