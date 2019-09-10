import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { TasksService } from './Services/tasks.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ImageComponent } from './image/image.component';
import { FooterComponent } from './footer/footer.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { TaskPipePipe } from './task-pipe.pipe';
import { TestComponent } from './test/test.component';
import { ProgramsComponent } from './programs/programs.component';
import { MatDialogModule, MatFormFieldModule } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ImageComponent,
    FooterComponent,
    SchedulerComponent,
    TaskPipePipe,
    TestComponent,
    ProgramsComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    StoreModule.forRoot({}) // here we're pass a reducer property
  ],
  providers: [TasksService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {}
