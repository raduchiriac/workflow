import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';

import { ModalsModule } from './modals/modals.module';
import { PageNotFoundComponent } from './404/page-not-found.component';

import { JobsService, TriggersService, SocketService } from './_services';
import { PipesModule } from './_pipes/pipes.module';

@NgModule({
  imports: [
    ClarityModule.forRoot(),
    ModalsModule,
    PipesModule
  ],
  exports: [
    ModalsModule,
    PipesModule,
    PageNotFoundComponent,
  ],
  declarations: [
    PageNotFoundComponent
  ],
  providers: [
    JobsService,
    TriggersService,
    SocketService
  ]
})

export class SharedModule { }
