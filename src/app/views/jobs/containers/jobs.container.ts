import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Job } from '../../../shared/_models';
import { JobsService } from '../../../shared/_services';
import * as reducer from '../reducers';

@Component({
  selector: 'app-jobs',
  templateUrl: 'jobs.container.html',
  styleUrls: ['jobs.container.scss'],
  encapsulation: ViewEncapsulation.None
})

export class JobsContainer implements OnInit, OnDestroy {

  jobs: Observable<Array<Job>>;

  private subscription: Subscription;

  constructor(
    private store: Store<reducer.JobsState>,
    private jobsService: JobsService,
  ) {
    this.jobs = store.select(reducer.getJobsEntitiesState);
  }

  ngOnInit() {
    this.subscription = this.jobs
      .subscribe(jobs => {}, error => {
        // Do something with error
      });
    this.jobsService.load();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  load() {
    this.jobsService.load();
  }

  add() {

  }

}
