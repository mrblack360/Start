import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ImageComponent } from './image/image.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [
  { path: 'Scheduler', component: SchedulerComponent },
  { path: 'Home', component: ImageComponent},
  { path: 'Calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
