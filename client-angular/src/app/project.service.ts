import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Project } from "./models/project";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  apiUrl: string = "http://localhost:5000/api/project";

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
