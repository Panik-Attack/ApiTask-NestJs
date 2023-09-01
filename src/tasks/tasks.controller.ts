import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTasksDto, UpdateTaskDto } from '../dto/taks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }
  @Post()
  createTask(@Body() newTask: CreateTasksDto) {
    const { title, description } = newTask;
    return this.taskService.createTask(title, description);
  }
  @Delete(':id')
  deleteTaks(@Param('id') id: string) {
    this.taskService.deleteTask(id);
  }
  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDto) {
    this.taskService.updateTask(id, updateFields);
  }
}
