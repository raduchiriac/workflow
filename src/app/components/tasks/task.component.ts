import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Task } from '../../_models';
import { TaskService } from '../../_services';

@Component({
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class TaskComponent implements OnInit, OnDestroy {

  // Redux based variables
  task: any //Observable<Task>;

  private subscription: Subscription;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      // this.task = this.taskService.getTask(params['token']);
   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadNew() {
    this.taskService.loadTasks();
  }

}
