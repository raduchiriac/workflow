import { TriggersActions } from '../actions'
import { Trigger } from '../../_models';

export interface State {
  currentTrigger: Trigger;
  triggers: Trigger[];
}

export function reducer(state: any = [], { type, payload }) {
  switch (type) {
    case TriggersActions.TRIGGERS_ADD:
      return payload;
    default:
      return state;
  }
}
