import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  todoUrl = '../../assets/Scheduler/Todo.json';
  doneUrl = '../../assets/Scheduler/Done.json';
  constructor(private http: HttpClient) {}

  getTasksTodo() {
    return this.http.get(this.todoUrl);
  }

  getTasksDone() {
    return this.http.get(this.doneUrl);
  }
}
