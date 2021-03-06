import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getSocketStatus } from './app.store';
import { SocketService } from './shared/_services';
import { Observable } from 'rxjs/Observable';
import * as SocketActions from './store/actions/socket.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  socketStatus$: Observable<boolean>;

  constructor(private socket: SocketService, private store: Store<AppState>) {}

  ngOnInit() {
    this.socketStatus$ = this.store
      .select(getSocketStatus)
      .map(connected => connected);

    this.socket.connected$
      .map(connected => new SocketActions.SetSocketConnected(connected))
      .subscribe(this.store);
  }
}
