import { Action } from '@ngrx/store';

export const SET_SOCKET_CONNECTED_STATUS = '[SocketIO] Set Socket Connection Status';

export class SetSocketConnected implements Action {
  readonly type = SET_SOCKET_CONNECTED_STATUS;
  constructor(public payload?: boolean) {}
}

export type Actions
  = SetSocketConnected;
