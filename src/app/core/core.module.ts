import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XHRBackend, RequestOptions } from '@angular/http';

import { HttpService } from './http.service';
import { httpServiceFactory } from '../_factories/http-service.factory';
import { AngularReduxRequestOptions } from './angular-redux-request.options';
import { LoaderService } from './loader/loader.service';
import { LoaderComponent } from './loader/loader.component';
import { PageNotFoundComponent } from './404/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
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
