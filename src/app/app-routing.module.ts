import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ImageComponent } from './image/image.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: 'Scheduler', component: SchedulerComponent },
  { path: 'Home', component: ImageComponent},
  { path: 'Calculator', component: CalculatorComponent},
  { path: 'Test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
