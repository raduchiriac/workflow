import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { Job } from '../_models';
import * as JobsActions from '../store/actions/jobs.actions';
import { State } from '../store/reducers/jobs.reducer';
import { AppState } from '../app.store';
import { HttpService } from '../core/http.service';

@Injectable()
export class JobService {

  jobs: Observable <Array<Job>>;
  URL = environment.backend.url;

  constructor(
    private http: HttpService,
    private store: Store<AppState>
  ) {
    this.jobs = store.select(store => store.jobs.entities);
  }

  load = () =>
    this.http.get(this.URL)
    .map((res: Response) => {
      const body = res.json();
      return body.db.jobs || {};
    })
    .map((payload: Job[]) => new JobsActions.JobsAdd(payload))
    .subscribe((action) => {
      this.store.dispatch(action);
    });
}
