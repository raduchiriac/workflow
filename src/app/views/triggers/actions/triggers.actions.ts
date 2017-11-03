import { Action } from '@ngrx/store';
import { Trigger } from '../../../shared/_models';

export const TRIGGERS_ADD = '[Triggers] Add';
// Singular
export const TRIGGER_ADD = '[Trigger] Add';
export const TRIGGER_PREVIEW = '[Trigger] Preview';
export const TRIGGER_SET_CURRENT = '[Trigger] Set Current';
export const TRIGGER_TOGGLE_DISABLED = '[Trigger] Toggle Disabled';

export class TriggersAdd implements Action {
  readonly type = TRIGGERS_ADD;
  constructor(public payload: Trigger[]) {}
}
// Singular
export class TriggerAdd implements Action {
  readonly type = TRIGGER_ADD;
  constructor(public payload: Trigger) {}
}
export class TriggerPreview implements Action {
  readonly type = TRIGGER_PREVIEW;
}
export class TriggerSetCurrent implements Action {
  readonly type = TRIGGER_SET_CURRENT;
  constructor(public payload: string) {}
}
export class TriggerToggleDisabled implements Action {
  readonly type = TRIGGER_TOGGLE_DISABLED;
  constructor(public payload: {key:string, value:boolean}) {}
}

export type Actions
= TriggersAdd
| TriggerAdd
| TriggerPreview
| TriggerSetCurrent
| TriggerToggleDisabled;
