import { Component, OnInit, OnDestroy, OnChanges, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Trigger } from '../../../../shared/_models';
import * as AppStore from '../../../../app.store';
import * as ModalsActions from '../../../../store/actions/modals.actions';
import * as TriggersActions from '../../../triggers/actions/triggers.actions';

@Component({
  selector: 'app-modals-trigger-add',
  templateUrl: 'add.modal.html',
  styleUrls: ['add.modal.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddModalComponent implements OnInit, OnDestroy {

  triggerAddNew$: Observable<boolean>;
  triggerAddNew_open: boolean;
  CronActive: boolean;
  ActionActive: boolean;
  AddLoading: boolean;

  constructor(
    private store: Store<AppStore.AppState>,
  ) {
    this.triggerAddNew$ = this.store.select(AppStore.getTriggerAdd);
  }

  closeModal() {
    this.AddLoading = false;
    this.store.dispatch(new ModalsActions.CloseTriggerAddAction());
  }

  add() {
    this.AddLoading = true;
    const T: Trigger = {
      className: 'demo',
      key: 'demoKey',
      startTime: '',
      jobKey: 'demoJob',
      cronExpression: '* * * 8 *'
    };
    this.store.dispatch(new TriggersActions.TriggerAdd(T));
    // TODO: Do this after the Promise
    this.closeModal();
  }

  ngOnInit() {
    this.triggerAddNew$.subscribe(res => this.triggerAddNew_open = res);
  }

  ngOnDestroy() {
  }

}
