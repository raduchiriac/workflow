import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ClarityModule } from "clarity-angular";

import { ComponentsModule } from './components';
import { JobsContainer } from './containers/jobs.container';

import { reducers }  from './reducers';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ClarityModule.forRoot(),
    RouterModule.forChild([{
      path: '',
      component: JobsContainer
    }]),
    StoreModule.forFeature('jobs', reducers),
  ],
  declarations: [
    JobsContainer,
  ],
  providers: [],
})
export class JobsModule {}
