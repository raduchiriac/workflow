import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../shared/_pipes/pipes.module';

import { PreviewModalComponent, AddModalComponent } from '../../views/triggers/containers/modals';
import { ModalsComponent } from './modals.component';

@NgModule({
  declarations: [
    ModalsComponent,
    // Modals from the Components below
    PreviewModalComponent,
    AddModalComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ClarityModule.forRoot(),
  ],
  exports: [
    ModalsComponent
  ],
  providers: [
  ]
})

export class ModalsModule { }
