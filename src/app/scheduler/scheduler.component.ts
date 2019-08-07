import { Component, OnInit } from '@angular/core';
import { TasksService } from '../Services/tasks.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  tasks = [];
  taskDisplay = false;

  current: any;

  constructor(private taskss: TasksService) { }

  ngOnInit() {
    this.taskss.getHeroes().subscribe(data => this.tasks = data);
  }

  addTask() {
    this.taskDisplay = true;
    this.tasks.push({ taskno: 1, taskValue: this.current, status: false });
  }
}
