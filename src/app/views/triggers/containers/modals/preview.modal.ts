import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as AppStore from '../../../../app.store';
import * as ModalsActions from '../../../../store/actions/modals.actions';

@Component({
  selector: 'app-modals-trigger-preview',
  templateUrl: 'preview.modal.html',
  styleUrls: ['preview.modal.scss'],
  encapsulation: ViewEncapsulation.None
})
@Injectable()
export class PreviewModalComponent implements OnInit, OnDestroy {

  triggerPreview$: Observable<boolean>;
  triggerPreview_open: boolean;

  constructor(
    private store: Store<AppStore.AppState>,
  ) {
    this.triggerPreview$ = this.store.select(AppStore.getTriggerPreview);
  }

  closeModal() {
    this.store.dispatch(new ModalsActions.CloseTriggerPreviewAction());
  }

  ngOnInit() {
    this.triggerPreview$.subscribe(res => this.triggerPreview_open = res);
  }

  ngOnDestroy() {
  }
}
