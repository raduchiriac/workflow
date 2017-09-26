import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { compose } from "@ngrx/core";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ClarityModule } from "clarity-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { Pipes } from './_pipes';

// TODO: Move to AppComponent
import { ModalsComponent } from './components/modals/modals.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TriggersComponent } from './components/triggers/triggers.component';
import { TasksCountComponent } from './components/tasks/tasks-count.component';
import { TaskComponent } from './components/tasks/task.component';
import { TriggerPreviewModal } from './components/triggers/modals/trigger-preview.modal';

import { TaskService, TriggerService, SocketService } from './_services';

import { AppStore, reducers, metaReducers } from './app.store'

@NgModule({
  declarations: [
    Pipes,
    AppComponent,
    // TODO: Move to AppComponent
    ModalsComponent,
    TasksComponent,
    TasksCountComponent,
    TaskComponent,
    TriggersComponent,
    TriggerPreviewModal,
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
    TaskService,
    TriggerService,
    SocketService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
