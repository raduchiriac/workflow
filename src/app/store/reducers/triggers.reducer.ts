import * as TriggersActions from '../actions/triggers.actions'
import { Trigger } from '../../_models';

export interface State {
  triggers: Trigger[];
}

export function reducer(state: any = [], { type, payload }) {
  switch (type) {
    case TriggersActions.TRIGGERS_ADD:
      return payload;
    case TriggersActions.TRIGGER_ADD:
      return [...state, payload];
    default:
      return state;
  }
}
