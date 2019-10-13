import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPost() {
    //This is a live hook that gets called when the component is loaded
    //insert API end point for DB in the parenthesis below
    return this.http.get('http://localhost:5550/test');
  }
}
