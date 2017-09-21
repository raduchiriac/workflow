import { TriggersActions } from '../actions'

export function TriggersReducer (state: any = [], { type, payload }) {
  switch (type) {
    case TriggersActions.TRIGGERS_ADD:
      return payload;
    default:
      return state;
  }
}
