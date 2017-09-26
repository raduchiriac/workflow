import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as AppStore from '../../app.store';
import * as ModalsActions from '../../store/actions/modals.actions';

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

  constructor(
    private store: Store<AppStore.AppState>,
  ) {
    this.triggerAddNew$ = this.store.select(AppStore.getTriggerAdd);
  }

  ngOnInit() {
    this.triggerAddNew$.subscribe(res => this.triggerAddNew_open = res);
  }

  ngOnDestroy() {
  }

  modalStateChange(open, who) {
    if(!open)
      switch(who) {
        case 'triggerAddNew_open':
          this.store.dispatch(new ModalsActions.CloseTriggerAddAction());
          break;
        default:
          break;
    }
  }
}
