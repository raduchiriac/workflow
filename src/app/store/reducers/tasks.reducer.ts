import { TasksActions } from '../actions'

export function TasksReducer (state: any = [], { type, payload }) {
  switch (type) {
    case TasksActions.TASKS_ADD:
      return payload;
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
