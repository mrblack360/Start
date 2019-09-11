import { Component, OnInit } from '@angular/core';
import { TasksService } from '../Services/tasks.service';
import { task } from 'src/task';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  tasks: any[] = [];
  current: any;

  internalTasks: task[] = [];
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  constructor(private taskss: TasksService) {}

  ngOnInit() {
    this.taskss
      .getTasks()
      .subscribe(data => (this.tasks = data), err => console.log(err));
  }

  addTask() {
    this.todo.push(this.current);
  }
  editTask(id, Value, Status) {
    this.internalTasks[id] = { taskno: id, taskValue: Value, status: !Status };
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
