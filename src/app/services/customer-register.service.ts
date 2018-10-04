import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerRegister} from '../dtos/customerRegister';
import {Observable} from 'rxjs/index';
import {Employee} from '../dtos/employee';
import {Router} from '@angular/router';
import {User} from '../dtos/user';
import {map} from 'rxjs/operators';

export const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/client-Login';

@Injectable()
export class CustomerRegisterService {

  constructor(private  http: HttpClient, private router: Router) { }

  saveCustomer(cusRegister: CustomerRegister): Observable <boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, cusRegister);
  }
  // login(user: User): Observable<boolean> {
  //   return this.http.post<boolean>(MAIN_URL + URL, user)
  //     .pipe(
  //       map((result) => {
  //         sessionStorage.setItem('token', result + '');
  //         if (result) {
  //           this.router.navigate(['/nevigation/homepage']);
  //         }
  //         return result;
  //       })
  //     );
  // }
  //
  // isAuthenticated(): boolean {
  //   if (sessionStorage.getItem('token')) {
  //     return sessionStorage.getItem('token') === 'false' ? false : true;
  //   }
  // }
  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['/nevigation/homepage']);
  }
}
