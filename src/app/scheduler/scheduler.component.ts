import { Component, OnInit } from '@angular/core';
import { TasksService } from '../Services/tasks.service';
import { task } from 'src/task';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  tasks: any[] = [];
  taskDisplay = true;
  current: any;

  internalTasks: task[] = [];

  constructor(private taskss: TasksService) { }

  ngOnInit() {
    this.taskss.getTasks().subscribe(data => this.tasks = data, err => console.log(err));
  }

  addTask() {
    console.log(this.internalTasks);
    this.internalTasks.push({ taskno: 1, taskValue: this.current, status: false });
  }
  editTask(id, Value, Status) {
    this.internalTasks[id] = {taskno: id, taskValue: Value, status: !Status};
  }
}
