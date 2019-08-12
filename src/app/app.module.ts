import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TasksService} from './Services/tasks.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ImageComponent } from './image/image.component';
import { FooterComponent } from './footer/footer.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { TaskPipePipe } from './task-pipe.pipe';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ImageComponent,
    FooterComponent,
    SchedulerComponent,
    TaskPipePipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
