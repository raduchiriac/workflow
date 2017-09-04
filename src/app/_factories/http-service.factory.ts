import { XHRBackend } from '@angular/http';
import { AngularReduxRequestOptions } from '../core/angular-redux-request.options';
import { HttpService } from '../core/http.service';
import { LoaderService } from '../core/loader/loader.service';

const httpServiceFactory = (backend: XHRBackend, options: AngularReduxRequestOptions, loaderService: LoaderService ) =>
  new HttpService(backend, options, loaderService);

export { httpServiceFactory };
