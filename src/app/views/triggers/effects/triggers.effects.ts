import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { TriggersService } from "../services/triggers.service";
import * as TriggersActions from "../actions/triggers.actions";
import { Observable } from "rxjs/Observable";
import {Action} from '@ngrx/store';

@Injectable()
export class TriggersEffects {
  @Effect({dispatch: false})
  addTrigger$ = this.actions$
      .ofType(TriggersActions.TRIGGER_ADD)
      .map((action: TriggersActions.TriggerAdd) => action.payload)
      .do((T) => this.triggersService.add(T));

  @Effect()
  addedTrigger$: Observable<Action> =
      this.triggersService.addedTrigger$
      .switchMap(trigger => Observable.of(new TriggersActions.TriggerAdded(trigger)));

  constructor(private actions$: Actions, private triggersService: TriggersService) {}  
}