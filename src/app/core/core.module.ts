import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XHRBackend, RequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { HttpService } from './http.service';
import { httpServiceFactory } from '../_factories/http-service.factory';
import { MaterialComponents } from './material-components';
import { AngularReduxRequestOptions } from './angular-redux-request.options';
import { LoaderService } from './loader/loader.service';
import { LoaderComponent } from './loader/loader.component';
import { PageNotFoundComponent } from './404/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MaterialComponents
  ],
  exports: [
    LoaderComponent,
    PageNotFoundComponent
  ],
  declarations: [
    LoaderComponent,
    PageNotFoundComponent
  ],
  providers: [
    LoaderService,
    {
      provide: HttpService,
      useFactory: httpServiceFactory,
      deps: [XHRBackend, RequestOptions, LoaderService]
    }
  ]
})

export class CoreModule { }
