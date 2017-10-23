import * as TriggersActions from '../actions/triggers.actions';
import { Trigger } from '../../../shared/_models';

export interface State {
  currentTrigger: string;
  entities: Array<Trigger>;
}

const initialState: State = {
  currentTrigger: '',
  entities: []
};

export function reducer(state = initialState, action: TriggersActions.Actions) {
  switch (action.type) {
    case TriggersActions.TRIGGERS_ADD:
      return {...state, entities: action.payload};
    case TriggersActions.TRIGGER_ADD:
      return {...state, entities: [...state.entities, action.payload]};
    case TriggersActions.TRIGGER_SET_CURRENT:
      return {...state, currentTrigger: action.payload};
    default:
      return state;
  }
}

export const getCurrentTriggerKey = (state: State) => state.currentTrigger;
