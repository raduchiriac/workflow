import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ClarityModule } from "clarity-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

// TODO: Move to AppCommon
import { ModalsComponent } from './components/modals/modals.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobsCountComponent } from './components/jobs/jobs-count.component';
import { JobComponent } from './components/jobs/job.component';

import { JobService, TriggerService, SocketService } from './_services';

import { reducers, metaReducers } from './app.store'

@NgModule({
  declarations: [
    AppComponent,
    // TODO: Move to AppCommon
    ModalsComponent,
    JobsComponent,
    JobsCountComponent,
    JobComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CoreModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    JobService,
    TriggerService,
    SocketService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
