import * as ModalsActions from '../actions/modals.actions';

export interface State {
  triggerAdd: boolean;
  triggerPreview: boolean;
  triggerDelete: boolean;
}

const initialState: State = {
  triggerAdd: false,
  triggerPreview: false,
  triggerDelete: false
};

export function reducer(state = initialState, { type, payload }): State {
  switch (type) {
    case ModalsActions.MODALS_TRIGGER_ADD_OPEN : {
      return Object.assign({...state}, {
        triggerAdd: true
      });
    }
    case ModalsActions.MODALS_TRIGGER_ADD_CLOSE : {
      return Object.assign({...state}, {
        triggerAdd: false
      });
    }
    case ModalsActions.MODALS_TRIGGER_PREVIEW_OPEN : {
      return Object.assign({...state}, {
        triggerPreview: true
      });
    }
    case ModalsActions.MODALS_TRIGGER_PREVIEW_CLOSE : {
      return Object.assign({...state}, {
        triggerPreview: false
      });
    }
    case ModalsActions.MODALS_TRIGGER_DELETE_OPEN : {
      return Object.assign({...state}, {
        triggerDelete: true
      });
    }
    case ModalsActions.MODALS_TRIGGER_DELETE_CLOSE : {
      return Object.assign({...state}, {
        triggerDelete: false
      });
    }
    default:
      return state;
  }
}

export const getTriggerAdd = (state: State) => state.triggerAdd;
export const getTriggerPreview = (state: State) => state.triggerPreview;
export const getTriggerDelete = (state: State) => state.triggerDelete;
