import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as TriggersReducer from './triggers.reducer';
import { AppState } from '../../../app.store';
import { createScope } from '@angular/core/src/profile/wtf_impl';
import { Trigger } from 'app/shared/_models';

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
  state => {console.log(state); return state.triggers.entities; }
);
// export const getCurrentTriggerKey = createSelector(
//   getTriggersState, TriggersReducer.getCurrentTriggerKey
// );
// export const getCurrentTrigger = createSelector(
//   getTriggersState,
//   getCurrentTriggerKey,
//   (entities, key) => { console.log(entities, key); }
// );
