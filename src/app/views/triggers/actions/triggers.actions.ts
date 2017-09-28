import { Action } from '@ngrx/store';
import { Trigger } from '../../../_models';

export const TRIGGERS_ADD = '[Triggers] Add';
// Singular
export const TRIGGER_ADD = '[Trigger] Add';
export const TRIGGER_PREVIEW = '[Trigger] Preview';

export class TriggersAdd implements Action {
  readonly type = TRIGGERS_ADD;
  constructor(public payload: Trigger[]) {}
}

export class TriggerAdd implements Action {
  readonly type = TRIGGER_ADD;
  constructor(public payload: Trigger) {}
}
export class TriggerPreview implements Action {
  readonly type = TRIGGER_PREVIEW;
}

export type Actions
= TriggersAdd
| TriggerAdd
| TriggerPreview;
