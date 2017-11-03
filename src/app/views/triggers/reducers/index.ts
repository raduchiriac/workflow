import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as TriggersReducer from './triggers.reducer';
import { AppState } from '../../../app.store';
import { createScope } from '@angular/core/src/profile/wtf_impl';
import { Trigger } from 'app/shared/_models';
import { log } from 'core-js/library/web/timers';

export interface TriggersState {
  triggers: TriggersReducer.State;
}

export interface State extends AppState {
  triggers: TriggersState;
}

export const reducers: ActionReducerMap<any> = {
  triggers: TriggersReducer.reducer
};

const getTriggersState = createFeatureSelector<TriggersState>('triggers');
export const getTriggersEntities = createSelector(
  getTriggersState,
  state => state.triggers.entities
);
export const getCurrentTriggerKey = createSelector(
  getTriggersState,
  state => state && state.triggers.currentTrigger
);
export const getCurrentTrigger = createSelector(
  getTriggersState,
  getCurrentTriggerKey,
  (state, key) => state && key && state.triggers.entities.filter(t => t.key === key)[0]
);
