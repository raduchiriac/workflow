import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { HttpService } from '../../../core/http.service';
import { environment } from '../../../../environments/environment';

import { Trigger } from '../../../shared/_models';
import * as TriggersActions from '../actions/triggers.actions';
import { State } from '../reducers';

@Injectable()
export class TriggersService {

  URL = environment.backend.url;

  constructor(
    private http: HttpService,
    private store: Store<State>
  ) {}

  load = () =>
    this.http.get(this.URL)
    .map((res: Response) => {
      const body = res.json();
      return body.db.triggers || {};
    })
    .map((payload: Trigger[]) => new TriggersActions.TriggersAdd(payload))
    .subscribe((action) => {
      this.store.dispatch(action);
    })
}
