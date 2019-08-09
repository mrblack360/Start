import { Component, OnInit } from '@angular/core';
import { TasksService } from '../Services/tasks.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  tasks: any[] = [];
  taskDisplay = true;

  current: any;

  constructor(private taskss: TasksService) { }

  ngOnInit() {
    this.taskss.getTasks().subscribe(data => this.tasks = data, err => console.log(err));
  }

  addTask() {
    this.tasks.push({ taskno: 1, taskValue: this.current, status: false });
  }
}
