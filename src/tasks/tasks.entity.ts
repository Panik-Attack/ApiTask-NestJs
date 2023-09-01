export enum TaskStatus {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Done = 'Done',
}

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
