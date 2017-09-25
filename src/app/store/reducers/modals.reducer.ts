import * as ModalsActions from '../actions/modals.actions';

export interface State {
  triggerAdd: boolean;
}

const initialState: State = {
  triggerAdd: false,
};

export function reducer(state = initialState, { type, payload }): State {
  switch (type) {
    case ModalsActions.MODALS_TRIGGER_ADD_CLOSE : {
      return Object.assign({...state}, {
        triggerAdd: false
      });
    }
    case ModalsActions.MODALS_TRIGGER_ADD_OPEN : {
      return Object.assign({...state}, {
        triggerAdd: true
      });
    }
    default:
      return state;
  }
}

export const getTriggerAdd = (state: State) => state.triggerAdd;
