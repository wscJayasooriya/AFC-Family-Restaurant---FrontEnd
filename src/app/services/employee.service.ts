import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../dtos/employee';

export const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/employees';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(MAIN_URL + URL);
  }

  deleteEmployee(emp_Id: number): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/' + emp_Id);
  }

  saveEmployee(employee: Employee): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, employee);
  }

  getAllEmployeeCount(): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/count');
  }
}
