import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app.store';

import { Trigger } from '../../_models';
import * as ModalsActions from '../../store/actions/modals.actions';
import { TriggersActions } from '../../store/actions';
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
    private store: Store<AppStore>,
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
    this.store.dispatch({type: ModalsActions.MODALS_TRIGGER_ADD_OPEN});
  }

  load() {
    this.triggerService.load();
  }

  export () {
    // this.store.dispatch(new layout.CloseSidenavAction());
  }

  preview(id) {
    // this.store.dispatch({type: TriggersActions.TRIGGER_PREVIEW, payload: id});
  }

}
