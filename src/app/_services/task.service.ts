import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Task } from '../_models';

import { HttpService } from '../core/http.service';

import { AppStore } from '../app.store';

@Injectable()
export class TaskService {

    tasks: Observable<Array<Task>>;

    tasksURL = 'campaign';

    constructor(
        private http: HttpService,
        private store: Store<AppStore>
    ) {
        this.tasks = store.select( store => store.tasks );
    }

    loadTasks = () =>
      this.http.get(this.tasksURL)
                .map((res: Response) => {
                    let body = res.json();
                    return body.data || {};
                })
                .map((payload: Task[]) => {
                    return { type: 'ADD_TASKS', payload };
                })
                .subscribe((action) => {
                    this.store.dispatch(action);
                });
}
