import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Trigger } from '../_models';
import { TriggersActions } from '../store/actions';

import { HttpService } from '../core/http.service';

import { AppStore } from '../app.store';

@Injectable()
export class TriggerService {

    triggers: Observable <Array<Trigger>> ;
    URL = 'http://localhost:4201';

    constructor(
      private http: HttpService,
      private store: Store<AppStore>
    ) {
      this.triggers = store.select(store => store.triggers);
    }

    load = () =>
      this.http.get(this.URL)
      .map((res: Response) => {
        const body = res.json();
        return body.db.triggers || {};
      })
      .map((payload: Trigger[]) => {
        return {
          type: TriggersActions.TRIGGERS_ADD,
          payload
        };
      })
      .subscribe((action) => {
        this.store.dispatch(action);
      });
}