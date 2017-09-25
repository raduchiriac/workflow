import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Task } from '../_models';
import { TasksActions } from '../store/actions';

import { HttpService } from '../core/http.service';

import { AppState } from '../app.store';

@Injectable()
export class TaskService {

    tasks: any;
    tasksURL = 'https://dingo-api.codingo.me/campaign';

    constructor(
      private http: HttpService,
      private store: Store<AppState>
    ) {
      this.tasks = store.select(store => store.tasks);
    }

    loadTasks = () =>
      this.http.get(this.tasksURL)
      .map((res: Response) => {
        const body = res.json();
        return body.data || {};
      })
      .map((payload: Task[]) => {
        return {
          type: TasksActions.TASKS_ADD,
          payload
        };
      })
      .subscribe((action) => {
        this.store.dispatch(action);
      });

    getTask = (token) => {
      return {name: 'TODO'}
    }
}
