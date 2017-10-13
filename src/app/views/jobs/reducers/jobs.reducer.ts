import * as JobsActions from '../actions/jobs.actions';
import { Job } from '../../../shared/_models';

export interface State {
  currentJob: string;
  entities: Array<Job>;
}

const initialState: State = {
  currentJob: '',
  entities: []
};

export function reducer(state = initialState, action: JobsActions.Actions) {
  switch (action.type) {
    case JobsActions.JOBS_ADD:
      return {...state, entities: action.payload};
    // Singular
    case JobsActions.JOB_ADD:
      return {...state, entities: [...state.entities, action.payload]};
    case JobsActions.JOB_UPDATE:
      return state;
    case JobsActions.JOB_DELETE:
      return state;
    default:
      return state;
  }
}
