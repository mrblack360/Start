import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../Services/scheduler.service';
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
  current: any;

  todo = [];

  done = [];

  constructor(private schedulerService: SchedulerService) {}

  ngOnInit() {
    this.schedulerService
      .getTasksTodo()
      .subscribe((todo: any[]) => (this.todo = todo));
    this.schedulerService
      .getTasksDone()
      .subscribe((done: any[]) => (this.done = done));
  }

  addTask() {
    this.todo.push(this.current);
  }
  editTask(id, Value, Status) {}
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
