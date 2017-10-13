import { NgModule } from '@angular/core';
import { ClarityModule } from "clarity-angular";

import { PreviewModalComponent } from '../../views/triggers/containers/modals';
import { ModalsComponent } from './modals.component';

@NgModule({
  declarations: [
    ModalsComponent,
    // External Modals
    PreviewModalComponent,
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
