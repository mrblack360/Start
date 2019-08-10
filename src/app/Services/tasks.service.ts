import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { task } from 'src/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public url = 'assets/tasks.json';

  constructor(private http: HttpClient) { }

   getTasks(): Observable<task[]> {
    return this.http.get<task[]>(this.url);
  }
}

export const tasks: task[] = [];
