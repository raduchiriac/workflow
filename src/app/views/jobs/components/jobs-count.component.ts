import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as reducer from '../reducers';

import { Job } from '../../../_models';
import { JobsService } from '../../../_services';

@Component({
  selector: 'app-jobs-count',
  templateUrl: 'jobs-count.component.html'
})
export class JobsCountComponent implements OnInit {

  // Redux based variables
  jobs: Observable<Array<Job>>;

  constructor(
    private store: Store<reducer.JobsState>,
    private jobService: JobsService
  ) {
    this.jobs = store.select(reducer.getJobsEntitiesState);
  }

  ngOnInit() { }
}
