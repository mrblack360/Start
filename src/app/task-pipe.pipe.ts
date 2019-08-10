import { Pipe, PipeTransform } from '@angular/core';
import { task } from 'src/task';

@Pipe({
  name: 'taskFilter'
})
export class TaskPipePipe implements PipeTransform {

  transform(value: task[], status: boolean): task[] {
   const returnTask = value.filter(task => task.status === status);
   return returnTask;
  }
}
