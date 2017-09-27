import { Action } from '@ngrx/store';
import { Job } from '../../_models';

export const JOB_ADD = '[Job] Add';
export const JOB_DELETE = '[Job] Delete';
export const JOB_UPDATE = '[Job] Update';
//
export const JOBS_ADD = '[Jobs] Add';

export class JobAdd implements Action {
  readonly type = JOB_ADD;
}
export class JobDelete implements Action {
  readonly type = JOB_DELETE;
}
export class JobUpdate implements Action {
  readonly type = JOB_UPDATE;
}
export class JobsAdd implements Action {
  readonly type = JOBS_ADD;
  constructor(public payload: Job[]) {}
}

export type Actions
  = JobAdd
  | JobDelete
  | JobUpdate
  | JobsAdd;

