import { BaseRequestOptions } from '@angular/http';

export class AngularReduxRequestOptions extends BaseRequestOptions {

  public token: string;

  constructor(angularReduxOptions ?: any) {

    super();

    const user = JSON.parse(localStorage.getItem('user'));
    let option = {}
    this.token = user && user.token;
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.token);

    if (angularReduxOptions !== null) {
      option = Object.assign({}, angularReduxOptions);
    }
  }

}
