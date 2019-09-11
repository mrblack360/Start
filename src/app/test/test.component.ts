import { Component, OnInit } from '@angular/core';
import { OrgUnit } from '../org-unit';
import { TasksService } from '../Services/tasks.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  OrgUnits: OrgUnit[] = [];

  constructor(private OrgUnitss: TasksService) {}

  ngOnInit() {
    this.OrgUnitss.getOrgUnits().subscribe(arg => {
      this.OrgUnits = arg;
    });
  }
}
