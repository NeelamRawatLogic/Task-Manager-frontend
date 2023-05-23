import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService],
})
export class TaskComponent implements OnInit {
  tasks$: Observable<Task[]> = of([]);
  newTask: Task = {};
  selectedTask: Task = {};

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks$ = of(tasks);
    });
  }

  resetFormTask(): void {
    this.newTask = {};
  }

  resetSelectedTask(): void {
    this.selectedTask = {};
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((task) => {
      this.resetFormTask();
      this.fetchTasks();
    });
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task).subscribe((updatedTask) => {
      this.resetSelectedTask();
      this.fetchTasks();
    });
  }

  deleteTask(taskId: number = 0): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.fetchTasks();
    });
  }
}
