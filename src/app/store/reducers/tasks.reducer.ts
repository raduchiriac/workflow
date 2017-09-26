import * as TasksActions from '../actions/tasks.actions';
import { Task } from '../../_models';

export interface State {
  tasks: Task[];
}

export function reducer(state: any = [], { type, payload }) {
  switch (type) {
    case TasksActions.TASKS_ADD:
      return payload;
    // Singular
    case TasksActions.TASK_ADD:
      return [...state, payload];
    case TasksActions.TASK_UPDATE:
      return state.map(task => {
        return task.token === payload.token ? Object.assign({}, task, payload) : task;
      });
    case TasksActions.TASK_DELETE:
      return state.filter(task => {
        return task.token !== payload.token;
      });
    default:
      return state;
  }
}
