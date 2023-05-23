import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../components/task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiBaseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiBaseUrl}/tasks`);
  }

  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiBaseUrl}/tasks`, newTask);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiBaseUrl}/tasks/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  deleteTask(taskId: number): Observable<void> {
    const url = `${this.apiBaseUrl}/tasks/${taskId}`;
    return this.http.delete<void>(url);
  }
}
