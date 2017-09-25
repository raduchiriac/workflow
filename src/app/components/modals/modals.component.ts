import { Component, OnInit, OnDestroy, ViewEncapsulation, Inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app.store';
import { getTriggerAdd } from '../../store/reducers';
import * as ModalsActions from '../../store/actions/modals.actions';

@Component({
  selector: 'app-modals',
  templateUrl: 'modals.component.html',
  styleUrls: ['modals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@Injectable()
export class ModalsComponent implements OnInit, OnDestroy {

  triggerAddNew$: any;

  constructor(
    private store: Store<AppStore>,
    // private triggerService: TriggerService,
  ) {
    // this.triggers = triggerService.triggers;
    // this.triggerAddNew$ = this.store.select(fromRoot.getShowSidenav).find(el => {
    //   console.log(el)
    //   return el;
    // });
  }

  ngOnInit() {
    // this.subscription = this.triggers
    //   .subscribe(triggers => {}, error => {
    //     // Do something with error
    //   });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  closeModal(which) {
    switch(which) {
      case 'triggerAddNew$':
        // this.store.dispatch({type: ModalsActions.MODALS_TRIGGER_ADD, payload: false});
        break;
      default:
        break;
    }
  }
}
