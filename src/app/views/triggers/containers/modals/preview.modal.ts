import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as AppStore from '../../../../app.store';
import * as ModalsActions from '../../../../store/actions/modals.actions';
import * as TriggersActions from '../../actions/triggers.actions';
import * as reducers from '../../reducers';
import { Trigger } from 'app/shared/_models';

@Component({
  selector: 'app-modals-trigger-preview',
  templateUrl: 'preview.modal.html',
  styleUrls: ['preview.modal.scss'],
  encapsulation: ViewEncapsulation.None
})
@Injectable()
export class PreviewModalComponent implements OnInit, OnDestroy {

  triggerPreview$: Observable<boolean>;
  currentTrigger$: any;
  triggerPreview_open: boolean;
  currentTrigger: string;

  constructor(
    private store: Store<AppStore.AppState>,
  ) {
    this.triggerPreview$ = store.select(AppStore.getTriggerPreview);
    this.currentTrigger$ = store.select(AppStore.getTriggerPreview);
  }

  closeModal() {
    this.store.dispatch(new TriggersActions.TriggerSetCurrent(''));
    this.store.dispatch(new ModalsActions.CloseTriggerPreviewAction());
  }

  save() {
    this.closeModal();
    console.log('saving...');
  }

  ngOnInit() {
    this.triggerPreview$.subscribe(res => this.triggerPreview_open = res);
    this.currentTrigger$.subscribe(res => this.currentTrigger = res);
  }

  ngOnDestroy() {
  }
}
