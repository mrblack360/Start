import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  tasks = [
    {id: ''},
    {task: ''},
    {done: false}
  ];

  constructor() { }

  ngOnInit() {
  }

}
