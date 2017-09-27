import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Job } from '../../_models';
import { JobService } from '../../_services';

@Component({
  selector: 'app-jobs-count',
  templateUrl: 'jobs-count.component.html'
})
export class JobsCountComponent implements OnInit {

  // Redux based variables
  jobs: Observable<Array<Job>>;

  constructor(
    private jobService: JobService
  ) {
    this.jobs = jobService.jobs;
  }

  ngOnInit() { }
}
