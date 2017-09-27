import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Job } from '../../_models/job';
import { JobService } from '../../_services';

@Component({
  selector: 'app-jobs',
  templateUrl: 'jobs.component.html',
  styleUrls: ['jobs.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class JobsComponent implements OnInit, OnDestroy {

  // Redux based variables
  jobs: Observable<Array<Job>>;

  private subscription: Subscription;

  constructor(
    private jobService: JobService
  ) {
    this.jobs = jobService.jobs;
  }

  ngOnInit() {
    this.subscription = this.jobs
      .subscribe(jobs => {}, error => {
        // Do something with error
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadNew() {
    this.jobService.loadJobs();
  }

  add() {

  }

}
