import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ImageComponent } from './image/image.component';
import { FooterComponent } from './footer/footer.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { TestComponent } from './test/test.component';
import { ProgramsComponent } from './programs/programs.component';

import { SchedulerService } from './Services/scheduler.service';

import {
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule
} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ImageComponent,
    FooterComponent,
    SchedulerComponent,
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
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    DragDropModule,
    StoreModule.forRoot({}) // here we're pass a reducer property
  ],
  providers: [SchedulerService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {}
