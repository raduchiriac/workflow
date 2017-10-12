import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as JobsReducer from './jobs.reducer';
import { AppState } from '../../../app.store';

export interface JobsState {
  jobs: JobsReducer.State;
}

export interface State extends AppState {
  jobs: JobsState;
}

export const reducers: ActionReducerMap<any> = {
  jobs: JobsReducer.reducer
};

export const getJobsState = createFeatureSelector<any>('jobs');
export const getJobsEntitiesState = createSelector(
  getJobsState,
  state => state.jobs.entities
);
