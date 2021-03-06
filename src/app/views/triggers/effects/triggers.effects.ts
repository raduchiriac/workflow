import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TriggersService } from '../services/triggers.service';
import * as TriggersActions from '../actions/triggers.actions';
import { Observable } from 'rxjs/Observable';
import {Action} from '@ngrx/store';

@Injectable()
export class TriggersEffects {
  // ADD
  @Effect({dispatch: false})
  addTrigger$ = this.actions$
    .ofType(TriggersActions.TRIGGER_ADD)
    .map((action: TriggersActions.TriggerAdd) => action.payload)
    .do((T) => this.triggersService.add(T));
  @Effect()
  addedTrigger$: Observable<Action> =
    this.triggersService.addedTrigger$
    .switchMap(trigger => Observable.of(new TriggersActions.TriggerAdded(trigger)));

  // UPDATE
  @Effect({dispatch: false})
  updateTrigger$ = this.actions$
    .ofType(TriggersActions.TRIGGER_UPDATE)
    .map((action: TriggersActions.TriggerUpdate) => action.payload)
    .do((PAYLOAD) => this.triggersService.update(PAYLOAD));
  @Effect()
  updatedTrigger$: Observable<Action> =
    this.triggersService.updatedTrigger$
    .switchMap(trigger => Observable.of(new TriggersActions.TriggerUpdated(trigger)));

  // DELETE
  @Effect({dispatch: false})
  deleteTrigger$ = this.actions$
    .ofType(TriggersActions.TRIGGER_DELETE)
    .map((action: TriggersActions.TriggerDelete) => action.payload)
    .do((key) => this.triggersService.delete(key));
  @Effect()
  deletedTrigger$: Observable<Action> =
    this.triggersService.deletedTrigger$
    .switchMap(key => Observable.of(new TriggersActions.TriggerDeleted(key)));

  constructor(private actions$: Actions, private triggersService: TriggersService) {}
}
