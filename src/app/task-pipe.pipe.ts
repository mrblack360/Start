import { Pipe, PipeTransform } from '@angular/core';
import { task } from 'src/task';

@Pipe({
  name: 'taskPipe'
})
export class TaskPipePipe implements PipeTransform {

  transform(value: task, data: boolean): any {
    return value.taskValue === data;
  }

}
