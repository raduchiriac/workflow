import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.store';

import { Trigger } from '../../_models';
import * as ModalsActions from '../../store/actions/modals.actions';
import { TriggerService } from '../../_services';

@Component({
  selector: 'app-triggers',
  templateUrl: 'triggers.component.html',
  styleUrls: ['triggers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@Injectable()
export class TriggersComponent implements OnInit, OnDestroy {

  triggers: Observable<Array<Trigger>>;

  private subscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private triggerService: TriggerService,
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

  addNew() {
    this.store.dispatch(new ModalsActions.OpenTriggerAddAction());
  }

  load() {
    this.triggerService.load();
  }

  export () { }

  preview(id: string) {
    this.store.dispatch(new ModalsActions.OpenTriggerPreviewAction(id));
  }

}
