import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { Trigger } from '../_models';
import * as TriggersActions from '../store/actions/triggers.actions';
import { State } from '../store/reducers/triggers.reducer';
import { AppState } from '../app.store';
import { HttpService } from '../core/http.service';

@Injectable()
export class TriggerService {

  triggers: Observable <Array<Trigger>>;
  URL = environment.backend.url;

  constructor(
    private http: HttpService,
    private store: Store<AppState>
  ) {
    this.triggers = store.select(store => store.triggers.entities);
  }

  load = () =>
    this.http.get(this.URL)
    .map((res: Response) => {
      const body = res.json();
      return body.db.triggers || {};
    })
    .map((payload: Trigger[]) => new TriggersActions.TriggersAdd(payload))
    .subscribe((action) => {
      this.store.dispatch(action);
    });
}
