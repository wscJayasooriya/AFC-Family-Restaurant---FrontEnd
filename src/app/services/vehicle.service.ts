import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicle} from '../dtos/vehicle';

export const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/vehicles';

@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<Array<Vehicle>> {
    return this.http.get<Array<Vehicle>>(MAIN_URL + URL);
  }

  deleteVehicle(veh_ID: number): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/' + veh_ID);
  }

  saveVehicle(vehicle: Vehicle): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, vehicle);
  }

}
