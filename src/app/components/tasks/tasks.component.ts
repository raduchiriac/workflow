import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Task } from '../../_models/task';

import { TaskService } from '../../_services';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TasksComponent implements OnInit, OnDestroy {

  // Redux based variables
  tasks: Observable<Array<Task>>;

  private subscription: Subscription;

  constructor(
    private taskService: TaskService
  ) {
    this.tasks = taskService.tasks;
  }

  ngOnInit() {
    this.subscription = this.tasks
      .subscribe(tasks => {}, error => {
        // Do something with error
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadNew() {
    this.taskService.loadTasks();
  }

}
