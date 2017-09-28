import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Trigger } from '../../../_models';
import { TriggerService } from '../../../_services';
import * as ModalsActions from '../../../store/actions/modals.actions';
import * as reducer from '../reducers';

@Component({
  selector: 'app-containers-triggers',
  templateUrl: 'triggers.container.html',
  styleUrls: ['triggers.container.scss'],
  encapsulation: ViewEncapsulation.None
})
@Injectable()
export class TriggersContainerComponent implements OnInit, OnDestroy {

  triggers: Observable<Array<Trigger>>;

  private subscription: Subscription;

  constructor(
    private store: Store<reducer.State>,
    private triggerService: TriggerService,
  ) {
    this.triggers = store.select(reducer.getTriggersEntitiesState);
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
