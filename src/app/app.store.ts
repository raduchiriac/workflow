import { Task, Trigger } from './_models';

export interface AppStore {
  tasks: Task[];
  triggers: Trigger[];
}
