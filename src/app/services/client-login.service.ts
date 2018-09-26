import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CustomerRegister} from '../dtos/customerRegister';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/customers';

@Injectable()
export class ClientLoginService {

  constructor(private http: HttpClient, private router: Router) { }

  login(customer: CustomerRegister): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, customer)
      .pipe(
        map((result) => {
          sessionStorage.setItem('token', result + '');
          if (result) {
            this.router.navigate(['nevigation/menu-dash']);
          }
          return result;
        })
      );
  }
}