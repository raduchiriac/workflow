import { SocketActions } from '../actions';

export interface State {
  socketConnected: boolean;
}

export function reducer(state, { type, payload }): State {
  switch (type) {
    case SocketActions.SET_SOCKET_CONNECTED_STATUS : {
      return {
        ...state,
        socketConnected: payload
      };
    }
    default:
      return state;
  }
}

export const getSocketStatus = (state: State): boolean => state.socketConnected;
