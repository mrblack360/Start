import { Component } from '@angular/core';
import { TasksService, HEROES } from './Services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tabs = ['Scientific Calculator', 'Help Others', 'Post Question', 'Profile'];
  title = 'My HomeWorker';

  Heroes = HEROES;
}
