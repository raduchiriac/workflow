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

import { ModalsComponent } from './core/modals/modals.component';

import { JobsService, TriggersService, SocketService } from './_services';

import { reducers, metaReducers } from './app.store'

@NgModule({
  declarations: [
    AppComponent,
    ModalsComponent,
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
    SocketService,
    JobsService,
    TriggersService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
