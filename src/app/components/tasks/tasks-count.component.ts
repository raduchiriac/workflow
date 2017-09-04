import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Task } from '../../_models';
import { TaskService } from '../../_services';

@Component({
    selector: 'tasks-count',
    templateUrl: 'tasks-count.component.html'
})
export class TasksCountComponent implements OnInit {

    // Redux based variables
    tasks: Observable<Array<Task>>;

    constructor(
        private taskService: TaskService
    ) {
        this.tasks = taskService.tasks;
    }

    ngOnInit() { }
}
