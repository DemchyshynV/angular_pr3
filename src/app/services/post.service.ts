import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts)
  }

  getByUserId(userId: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts, {
      params: new HttpParams({
        fromObject: {
          userId
        }
      })
    })
  }
}
