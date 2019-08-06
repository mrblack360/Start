import { Component, OnInit } from '@angular/core';
import { task } from 'src/task';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  tasks: task[];
  taskDisplay = false;

  current: any;

  constructor() { }

  ngOnInit() {
    this.tasks = [];
  }

  addTask() {
    this.taskDisplay = true;
    this.tasks.push({ taskno: 1, taskValue: this.current, status: false });
  }
}
