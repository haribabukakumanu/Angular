import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../model/posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseURL: string = 'https://jsonplaceholder.typicode.com/posts';
  postList: Posts[] = [];
  constructor(public http: HttpClient) {}

  deletePostDetails(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  refreshList() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => (this.postList = res as Posts[]));
  }
}
