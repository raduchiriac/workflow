import { createSelector } from 'reselect';
import {
  combineReducers,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer } from "@ngrx/store";

import * as RouterStore from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

import * as ModalsReducer from "./store/reducers/modals.reducer";
import * as SocketReducer from "./store/reducers/socket.reducer";
import * as JobsReducer from "./store/reducers/jobs.reducer";
import * as TriggersReducer from "./store/reducers/triggers.reducer";
import * as RouterReducer from "./store/reducers/router.reducer";

export interface AppState {
  modals: ModalsReducer.State;
  socket: SocketReducer.State;
  jobs: JobsReducer.State;
  triggers: TriggersReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
  modals: ModalsReducer.reducer,
  socket: SocketReducer.reducer,
  jobs: JobsReducer.reducer,
  triggers: TriggersReducer.reducer,
}

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    // TODO:
    // Hide using this regex in Chrome's filter zone
    console.groupCollapsed('>> LOGGER !<<');
    console.log(`state `, state);
    console.log(`action`, action);
    console.groupEnd();

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

const combinedReducers: ActionReducer<AppState> = combineReducers(reducers);

export function AppStore(state: any, action: any) {
  return combinedReducers(state, action);
}

// Selectors
const getModalsState = createFeatureSelector<ModalsReducer.State>('modals');
export const getTriggerAdd = createSelector(getModalsState, ModalsReducer.getTriggerAdd);
export const getTriggerPreview = createSelector(getModalsState, ModalsReducer.getTriggerPreview);

const getSocketState = createFeatureSelector<SocketReducer.State>('socket');
export const getSocketStatus = createSelector(getSocketState, SocketReducer.getSocketStatus);
