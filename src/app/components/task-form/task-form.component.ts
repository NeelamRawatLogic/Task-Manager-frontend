import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();
  newTask: Task = {};
  isFormSubmitted: boolean = false;

  submitForm(): void {
    this.isFormSubmitted = true;
    if (this.newTask && this.newTask.title && this.newTask.description) {
      this.isFormSubmitted = false;
      this.addTask.emit(this.newTask);
      this.newTask = {};
    }
  }
}
