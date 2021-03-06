import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  getByPostId(postId: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments, {
      params: new HttpParams({
        fromObject: {
          postId
        }
      })
    })
  }
}
