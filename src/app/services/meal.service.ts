import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Meal} from '../dtos/meal';

export const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/meals';

@Injectable()
export class MealService {

  constructor(private http: HttpClient) { }

  getAllMeals(): Observable<Array<Meal>> {
    return this.http.get<Array<Meal>>(MAIN_URL + URL);
  }

  deleteMeal(mealCode: number): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/' + mealCode);
  }

  saveMeal(meal: Meal): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, meal);
  }

  getImage(path: string): string {
    return (MAIN_URL + URL + '/file?path=' + path + '');
  }


}
