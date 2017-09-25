import { Action } from '@ngrx/store';

export const MODALS_TRIGGER_ADD_OPEN = '[Modals] Open Trigger_Add';
export const MODALS_TRIGGER_ADD_CLOSE = '[Modals] Close Trigger_Add';

export class OpenTriggerAddAction implements Action {
  readonly type = MODALS_TRIGGER_ADD_OPEN;
}

export class CloseTriggerAddAction implements Action {
  readonly type = MODALS_TRIGGER_ADD_CLOSE;
}

export type Actions
  = OpenTriggerAddAction
  | CloseTriggerAddAction;
