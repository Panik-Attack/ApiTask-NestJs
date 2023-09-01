import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { TaskStatus } from '../tasks/tasks.entity';

export class CreateTasksDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}
export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn([TaskStatus.Done, TaskStatus.InProgress, TaskStatus.Pending])
  status?: TaskStatus;
}
