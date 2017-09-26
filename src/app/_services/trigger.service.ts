import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { Trigger } from '../_models';
import { TriggersActions } from '../store/actions';

import { HttpService } from '../core/http.service';

import { AppState } from '../app.store';

@Injectable()
export class TriggerService {

  // triggers: Observable <Array<Trigger>>;
  triggers: any;
  URL = environment.backend.url;

  constructor(
    private http: HttpService,
    private store: Store<AppState>
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
