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
    // Singular
    case TriggersActions.TRIGGER_SET_CURRENT:
      return {...state, currentTrigger: action.payload};
    case TriggersActions.TRIGGER_ADDED:
      return {...state, entities: [...state.entities, action.payload]};
    case TriggersActions.TRIGGER_UPDATED:
      const idx: number = state.entities.findIndex(e => e.key === action.payload.key);
      return {...state, entities: Object.assign([], state.entities, {[idx]: action.payload})};
    case TriggersActions.TRIGGER_DELETED:
      return {...state, entities: state.entities.filter(t => t.key !== action.payload)};
    default:
      return state;
  }
}

export const getCurrentTriggerKey = (state: State) => state.currentTrigger;
