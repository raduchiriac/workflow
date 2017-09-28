import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ClarityModule } from "clarity-angular";

import { Pipes } from '../../_pipes';

import { ComponentsModule } from './components';
import { TriggersContainerComponent } from './containers/triggers.container';

import { reducers }  from './reducers';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ClarityModule.forRoot(),
    RouterModule.forChild([{
      path: '',
      component: TriggersContainerComponent
    }]),
    StoreModule.forFeature('triggers', reducers),
  ],
  declarations: [
    Pipes,
    TriggersContainerComponent,
  ],
  providers: [],
})
export class TriggersModule {}
