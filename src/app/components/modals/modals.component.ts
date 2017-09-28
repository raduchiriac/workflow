import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Trigger } from '../../_models';
import * as AppStore from '../../app.store';
import * as ModalsActions from '../../store/actions/modals.actions';
import * as TriggersActions from '../../views/triggers/actions/triggers.actions';

@Component({
  selector: 'app-modals',
  templateUrl: 'modals.component.html',
  styleUrls: ['modals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@Injectable()
export class ModalsComponent implements OnInit, OnDestroy {

  triggerAddNew$: Observable<boolean>;
  triggerAddNew_open: boolean;

  triggerPreview$: Observable<boolean>;
  triggerPreview_open: boolean;

  constructor(
    private store: Store<AppStore.AppState>,
  ) {
    this.triggerAddNew$ = this.store.select(AppStore.getTriggerAdd);
    this.triggerPreview$ = this.store.select(AppStore.getTriggerPreview);
  }

  ngOnInit() {
    this.triggerAddNew$.subscribe(res => this.triggerAddNew_open = res);
    this.triggerPreview$.subscribe(res => this.triggerPreview_open = res);
  }

  ngOnDestroy() {
  }

  addTrigger() {
    let newT:Trigger = {
      className: 'demo',
      key: 'demoKey',
      description: '',
      startTime: '',
      jobKey: 'demoJob',
      cronExpression: '* * * 8 *'
    };

    this.store.dispatch(new TriggersActions.TriggerAdd(newT));
    this.modalStateChange(false, 'triggerAddNew_open')
  }

  modalStateChange(open, who) {
    if(!open)
      switch(who) {
        case 'triggerAddNew_open':
          this.store.dispatch(new ModalsActions.CloseTriggerAddAction());
          break;
        case 'triggerPreview_open':
          this.store.dispatch(new ModalsActions.CloseTriggerPreviewAction());
          break;
        default:
          break;
    }
  }
}
