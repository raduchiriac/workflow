import * as JobsActions from '../actions/jobs.actions';
import { Job } from '../../_models';

export interface State {
  jobs: Job[];
}

export function reducer(state: any = [], { type, payload }) {
  switch (type) {
    case JobsActions.JOBS_ADD:
      return payload;
    // Singular
    case JobsActions.JOB_ADD:
      return [...state, payload];
    case JobsActions.JOB_UPDATE:
      return state.map(job => {
        return job.token === payload.token ? Object.assign({}, job, payload) : job;
      });
    case JobsActions.JOB_DELETE:
      return state.filter(job => {
        return job.token !== payload.token;
      });
    default:
      return state;
  }
}
