import { createSelector } from 'reselect';
import { compose } from "@ngrx/core";
import { combineReducers, ActionReducer } from "@ngrx/store";

import * as ModalsReducer from "./store/reducers/modals.reducer";
import * as SocketReducer from "./store/reducers/socket.reducer";
import * as TasksReducer from "./store/reducers/tasks.reducer";
import * as TriggersReducer from "./store/reducers/triggers.reducer";

export interface AppState {
  modals: ModalsReducer.State,
  socket: SocketReducer.State,
  tasks: TasksReducer.State;
  triggers: TriggersReducer.State;
}

const metaReducer: ActionReducer<AppState> = combineReducers({
  modals: ModalsReducer.reducer,
  socket: SocketReducer.reducer,
  tasks: TasksReducer.reducer,
  triggers: TriggersReducer.reducer,
});

export function AppStore(state: any, action: any) {
  return metaReducer(state, action);
}
