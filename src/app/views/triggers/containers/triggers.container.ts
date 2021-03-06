import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Trigger } from '../../../shared/_models';
import { TriggersService } from '../../../shared/_services';
import * as ModalsActions from '../../../store/actions/modals.actions';
import * as TriggersActions from '../actions/triggers.actions';
import * as reducer from '../reducers';

@Component({
  selector: 'app-containers-triggers',
  templateUrl: 'triggers.container.html',
  styleUrls: ['triggers.container.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TriggersContainer implements OnInit, OnDestroy {

  triggers: Observable<Array<Trigger>>;

  private subscription: Subscription;

  constructor(
    private store: Store<reducer.TriggersState>,
    private triggersService: TriggersService,
  ) {
    this.triggers = store.select(reducer.getTriggersEntities);
  }

  ngOnInit() {
    this.subscription = this.triggers
      .subscribe(triggers => {}, error => {
        // Do something with error
      });
    this.triggersService.load();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addNew() {
    this.store.dispatch(new ModalsActions.OpenTriggerAddAction());
  }

  load() {
    this.triggersService.load();
  }

  export() { }

  preview(id: string) {
    this.store.dispatch(new TriggersActions.TriggerSetCurrent(id));
    this.store.dispatch(new ModalsActions.OpenTriggerPreviewAction());
  }

  delete(id: string) {
    this.store.dispatch(new TriggersActions.TriggerSetCurrent(id));
    this.store.dispatch(new ModalsActions.OpenTriggerDeleteAction());
  }

  toggleDisable (evt, key) {
    this.store.dispatch(new TriggersActions.TriggerUpdate({
      key,
      props: {
        disabled: !evt.target.checked
      }
    }));
  }

}
