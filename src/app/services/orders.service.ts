import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Orders} from '../dtos/orders';
import {Observable} from 'rxjs';

export const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/orders';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) { }

  placeOrder(order: Orders): Observable<boolean> {
      alert(order.customerName);
    return this.http.post<boolean>(MAIN_URL + URL, order);
  }
}
