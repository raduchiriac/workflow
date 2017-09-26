import { Action } from '@ngrx/store';
import { Task } from '../../_models';

export const TASK_ADD = '[Task] Add';
export const TASK_DELETE = '[Task] Delete';
export const TASK_UPDATE = '[Task] Update';
//
export const TASKS_ADD = '[Tasks] Add';

export class TaskAdd implements Action {
  readonly type = TASK_ADD;
}
export class TaskDelete implements Action {
  readonly type = TASK_DELETE;
}
export class TaskUpdate implements Action {
  readonly type = TASK_UPDATE;
}
export class TasksAdd implements Action {
  readonly type = TASKS_ADD;
  constructor(public payload: Task[]) {}
}

export type Actions
  = TaskAdd
  | TaskDelete
  | TaskUpdate
  | TasksAdd;

