import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Comment} from '../dtos/comment';
import {Meal} from '../dtos/meal';

export const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/comments';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) { }

  saveComment(comment: Comment): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL , comment);
  }

  getAllComments(): Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>(MAIN_URL + URL);
  }
}
