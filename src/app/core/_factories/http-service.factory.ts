import { XHRBackend } from '@angular/http';
import { AngularReduxRequestOptions } from '../angular-redux-request.options';
import { HttpService } from '../http.service';
import { LoaderService } from '../loader/loader.service';

const httpServiceFactory = (backend: XHRBackend, options: AngularReduxRequestOptions, loaderService: LoaderService ) =>
  new HttpService(backend, options, loaderService);

export { httpServiceFactory };
