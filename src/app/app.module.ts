import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { task } from '../task';
import { TasksService} from './Services/tasks.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ImageComponent } from './image/image.component';
import { FooterComponent } from './footer/footer.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ImageComponent,
    FooterComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
