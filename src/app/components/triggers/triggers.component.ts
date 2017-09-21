import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Trigger } from '../../_models';

import { TriggerService } from '../../_services';

@Component({
  selector: 'app-triggers',
  templateUrl: 'triggers.component.html',
  styleUrls: ['triggers.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TriggersComponent implements OnInit, OnDestroy {

  triggers: Observable<Array<Trigger>>;

  private subscription: Subscription;

  constructor(
    private triggerService: TriggerService
  ) {
    this.triggers = triggerService.triggers;
  }

  ngOnInit() {
    this.subscription = this.triggers
      .subscribe(triggers => {}, error => {
        // Do something with error
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  load() {
    this.triggerService.load();
  }

}
