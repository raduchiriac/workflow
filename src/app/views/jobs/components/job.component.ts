import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Job } from '../../../_models';
import { JobsService } from '../../../_services';

@Component({
  selector: 'app-job',
  templateUrl: 'job.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class JobComponent implements OnInit, OnDestroy {

  job: any;

  private subscription: Subscription;

  constructor(
    private jobService: JobsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
