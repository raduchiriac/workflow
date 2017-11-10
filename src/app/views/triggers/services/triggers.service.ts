import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { SocketService } from '../../../shared/_services/socket.service';
import { HttpService } from '../../../core/http.service';
import { environment } from '../../../../environments/environment';

import { Trigger } from '../../../shared/_models';
import * as TriggersActions from '../actions/triggers.actions';
import { State } from '../reducers';

@Injectable()
export class TriggersService {

  addedTrigger$: Observable<any>;
  updatedTrigger$: Observable<any>;
  deletedTrigger$: Observable<any>;
  URL: string;

  constructor(
    private http: HttpService,
    private store: Store<State>,
    private socket: SocketService
  ) {
    this.URL = environment.backend.url;
    this.addedTrigger$ = this.socket.listen(TriggersActions.TRIGGER_ADDED);
    this.updatedTrigger$ = this.socket.listen(TriggersActions.TRIGGER_UPDATED);
    this.deletedTrigger$ = this.socket.listen(TriggersActions.TRIGGER_DELETED);
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
    })

  add = (T: Trigger) => {
    this.socket.emit(TriggersActions.TRIGGER_ADD, T);
  }

  update = (payload) => {
    this.socket.emit(TriggersActions.TRIGGER_UPDATE, payload);
  }

  delete = (key) => {
    this.socket.emit(TriggersActions.TRIGGER_DELETE, key);
  }
}
