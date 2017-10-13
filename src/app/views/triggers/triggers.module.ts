import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ClarityModule } from 'clarity-angular';

import { ComponentsModule } from './components';
import { PipesModule } from '../../shared/_pipes/pipes.module';
import { TriggersContainer } from './containers/triggers.container';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    ClarityModule.forRoot(),
    RouterModule.forChild([{
      path: '',
      component: TriggersContainer
    }]),
    StoreModule.forFeature('triggers', reducers),
  ],
  declarations: [
    TriggersContainer,
  ],
  providers: [],
})
export class TriggersModule {}
