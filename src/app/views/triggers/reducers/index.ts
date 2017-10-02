import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as TriggersReducer from './triggers.reducer';
import { AppState } from '../../../app.store';

export interface TriggersState {
  triggers: TriggersReducer.State;
}

export interface State extends AppState {
  'triggers': TriggersState;
}

export const reducers: ActionReducerMap<any> = {
  triggers: TriggersReducer.reducer
};

export const getTriggersState = createFeatureSelector<TriggersState>('triggers');
export const getTriggersEntitiesState = createSelector(
  getTriggersState,
  state => state.triggers.entities
);
