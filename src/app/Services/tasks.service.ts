import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { task } from 'src/task';
import { OrgUnit } from '../org-unit';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public url = 'assets/tasks.json';
  public dhisUrl = 'assets/Data/OrgUnits.json';

  constructor(private http: HttpClient, private http2: HttpClient) { }

   getTasks(): Observable<task[]> {
    return this.http.get<task[]>(this.url);
  }

  getOrgUnits(): Observable<OrgUnit[]> {
    return this.http2.get<OrgUnit[]>(this.dhisUrl);
  }
}

export const tasks: task[] = [];
