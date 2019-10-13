import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { catchError, map, tap } from "rxjs/operator";
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  url: string = "http://localhost:5000/post/";

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]> (this.url);
  }

  addPost(newPost: Post): Observable<Post> {
    const formData = new FormData();
    formData.append("image", newPost.image);
    formData.append("name", newPost.name);
    return this.http.post<Post>(this.url, formData);
  }
}
