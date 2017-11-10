import { Action } from '@ngrx/store';

export const MODALS_TRIGGER_ADD_OPEN = '[Modals] Open Trigger_Add';
export const MODALS_TRIGGER_ADD_CLOSE = '[Modals] Close Trigger_Add';
export const MODALS_TRIGGER_PREVIEW_OPEN = '[Modals] Open Trigger_Preview';
export const MODALS_TRIGGER_PREVIEW_CLOSE = '[Modals] Close Trigger_Preview';
export const MODALS_TRIGGER_DELETE_OPEN = '[Modals] Open Trigger_Delete';
export const MODALS_TRIGGER_DELETE_CLOSE = '[Modals] Close Trigger_Delete';

export class OpenTriggerAddAction implements Action {
  readonly type = MODALS_TRIGGER_ADD_OPEN;
}
export class CloseTriggerAddAction implements Action {
  readonly type = MODALS_TRIGGER_ADD_CLOSE;
}

export class OpenTriggerPreviewAction implements Action {
  readonly type = MODALS_TRIGGER_PREVIEW_OPEN;
}
export class CloseTriggerPreviewAction implements Action {
  readonly type = MODALS_TRIGGER_PREVIEW_CLOSE;
}

export class OpenTriggerDeleteAction implements Action {
  readonly type = MODALS_TRIGGER_DELETE_OPEN;
}
export class CloseTriggerDeleteAction implements Action {
  readonly type = MODALS_TRIGGER_DELETE_CLOSE;
}

export type Actions
  = OpenTriggerAddAction
  | CloseTriggerAddAction
  | OpenTriggerPreviewAction
  | CloseTriggerPreviewAction
  | OpenTriggerDeleteAction
  | CloseTriggerDeleteAction;
