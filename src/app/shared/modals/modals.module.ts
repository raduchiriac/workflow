import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';

import { PreviewModalComponent, AddModalComponent } from '../../views/triggers/containers/modals';
import { ModalsComponent } from './modals.component';

@NgModule({
  declarations: [
    ModalsComponent,
    // Components' Modals
    PreviewModalComponent,
    AddModalComponent
  ],
  imports: [
    ClarityModule.forRoot(),
  ],
  exports: [
    ModalsComponent
  ],
  providers: [
  ]
})

export class ModalsModule { }
