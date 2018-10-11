import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {MAIN_URL} from './employee.service';
import {OrderDetails} from '../dtos/orderDetails';
import {HttpClient} from '@angular/common/http';

const URL = '/api/v1/orderdetail';

@Injectable()
export class OrderdetailService {

  constructor(private http: HttpClient) { }

  getAllOrderdetails(): Observable<Array<OrderDetails>> {
    return this.http.get<Array<OrderDetails>>(MAIN_URL + URL);
  }

  deleteOrderdetail(emp_Id: number): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/' + emp_Id);
  }

  saveOrderdetail(orderDetails: OrderDetails): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, orderDetails);
  }

  getAllOrderdetailsCount(): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/count');
  }
  // getDetails(od_Id: number): Observable<OrderDetails> {
  //   return this.http.get<OrderDetails>(MAIN_URL + URL + '/' + od_Id);
  // }
}
