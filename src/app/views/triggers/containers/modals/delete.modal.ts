import { Component, OnInit, OnDestroy, ViewEncapsulation, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as AppStore from '../../../../app.store';
import * as ModalsActions from '../../../../store/actions/modals.actions';
import * as TriggersActions from '../../actions/triggers.actions';
import * as reducers from '../../reducers';
import { Trigger } from 'app/shared/_models';

@Component({
  selector: 'app-modals-trigger-delete',
  templateUrl: 'delete.modal.html',
  styleUrls: ['delete.modal.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteModalComponent implements OnInit, OnDestroy {

  triggerDelete$: Observable<boolean>;
  triggerDelete_open: boolean;
  currentTriggerKey$: Observable<string>;
  currentTriggerKey: string;
  DeleteLoading: boolean;

  constructor(
    private store: Store<AppStore.AppState>,
  ) {
    this.currentTriggerKey$ = store.select(reducers.getCurrentTriggerKey);
    this.triggerDelete$ = store.select(AppStore.getTriggerDelete);
  }

  closeModal() {
    this.DeleteLoading = false;
    this.store.dispatch(new TriggersActions.TriggerSetCurrent(''));
    this.store.dispatch(new ModalsActions.CloseTriggerDeleteAction());
  }

  delete() {
    this.DeleteLoading = true;
    this.store.dispatch(new TriggersActions.TriggerDelete(this.currentTriggerKey));

    // TODO: Do this after the promise
    this.closeModal();
  }

  ngOnInit() {
    this.currentTriggerKey$.subscribe(res => this.currentTriggerKey = res || '');
    this.triggerDelete$.subscribe(res => this.triggerDelete_open = res);
  }

  ngOnDestroy() {
  }

}
