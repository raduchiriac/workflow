import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.store';
import { SocketService } from './_services';
import { Observable } from 'rxjs/Observable';

// import { getSocketStatus } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    socketStatus$: Observable<string>;

    constructor(private socket: SocketService, private store: Store<AppState>) {}

    ngOnInit() {
      // this.socketStatus$ = this.store
      //     .select(getSocketStatus)
      //     .map(connected => connected ? 'connected' : 'disconnected');

      // this.socket.connected$
      //     .map(connected => new uiActions.SetSocketConnected(connected))
      //     .subscribe(this.store);
    }
}
