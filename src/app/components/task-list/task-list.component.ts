import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() tasks: Task[] | null = [];
  @Input() selectedTask: Task = {};
  @Output() editTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();
  @Output() updateTask: EventEmitter<Task> = new EventEmitter<Task>();

  selectTask(task: Task): void {
    this.editTask.emit(task);
  }

  onUpdateTask(task: Task): void {
    this.updateTask.emit(task);
  }

  removeTask(taskId: number = 0): void {
    this.deleteTask.emit(taskId);
  }
}
