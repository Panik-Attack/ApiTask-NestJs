import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { UpdateTaskDto } from '../dto/taks.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'nueva tareas',
      description: 'descripcion de la nueva tarea',
      status: TaskStatus.Pending,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  createTask(title: string, description: string) {
    const task: Task = {
      id: Date().toString().replace('', '-'),
      title,
      description,
      status: TaskStatus.Pending,
    };
    this.tasks.push(task);
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  updateTask(id: string, updateFields: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updateFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }
}
