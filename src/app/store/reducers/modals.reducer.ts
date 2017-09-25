import * as ModalsActions from '../actions/modals.actions';

interface State {
  triggerAdd: boolean;
}

const initialState: State = {
  triggerAdd: false,
};

export function ModalsReducer(state = initialState, { type, payload }) {
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

