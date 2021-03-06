import { Action } from '@ngrx/store';
import { Trigger } from '../../../shared/_models';

export const TRIGGERS_ADD = '[Triggers] Add';
// Singular
export const TRIGGER_ADD = '[Trigger] Add';
export const TRIGGER_DELETE = '[Trigger] Delete';
export const TRIGGER_UPDATE = '[Trigger] Update';
export const TRIGGER_SET_CURRENT = '[Trigger] Set Current';
export const TRIGGER_TOGGLE_DISABLED = '[Trigger] Toggle Disabled';

// @Effects
export const TRIGGER_ADDED = '[Trigger] @Effect Added';
export const TRIGGER_DELETED = '[Trigger] @Effect Deleted';
export const TRIGGER_UPDATED = '[Trigger] @Effect Updated';

/*
 ------------------------------------------------------------------
 */
export class TriggersAdd implements Action {
  readonly type = TRIGGERS_ADD;
  constructor(public payload: Trigger[]) {}
}
// Singular
export class TriggerAdd implements Action {
  readonly type = TRIGGER_ADD;
  constructor(public payload: Trigger) {}
}
export class TriggerAdded implements Action {
  readonly type = TRIGGER_ADDED;
  constructor(public payload: Trigger) {}
}
export class TriggerUpdate implements Action {
  readonly type = TRIGGER_UPDATE;
  constructor(public payload: {key: string, props: object}) {}
}
export class TriggerUpdated implements Action {
  readonly type = TRIGGER_UPDATED;
  constructor(public payload: Trigger) {}
}
export class TriggerDelete implements Action {
  readonly type = TRIGGER_DELETE;
  constructor(public payload: string) {}
}
export class TriggerDeleted implements Action {
  readonly type = TRIGGER_DELETED;
  constructor(public payload: string) {}
}
export class TriggerSetCurrent implements Action {
  readonly type = TRIGGER_SET_CURRENT;
  constructor(public payload: string) {}
}

export type Actions
= TriggersAdd
| TriggerAdd
| TriggerAdded
| TriggerSetCurrent
| TriggerDelete
| TriggerDeleted
| TriggerUpdate
| TriggerUpdated;
