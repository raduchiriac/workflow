import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Job } from '../../_models';
import { JobService } from '../../_services';

@Component({
  selector: 'app-job',
  templateUrl: 'job.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class JobComponent implements OnInit, OnDestroy {

  // Redux based variables
  job: any //Observable<Job>;

  private subscription: Subscription;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      // this.job = this.jobService.getJob(params['token']);
   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
