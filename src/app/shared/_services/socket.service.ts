import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';

// Low level socket service api (based on rxjs)

@Injectable()
export class SocketService {

  private socket: SocketIOClient.Socket;
  connected$ = new BehaviorSubject<boolean>(false);
  URL: string = environment.backend.url;

  constructor() {
    this.socket = socketIo(this.URL, {});
    this.socket.on('connect', () => this.connected$.next(true));
    this.socket.on('disconnect', () => this.connected$.next(false));
  }

  join(room: string) {
    // auto rejoin after reconnect mechanism
    this.connected$.subscribe(connected => {
      if (connected) {
        this.socket.emit('join', {room});
      }
    });
  }

  emit(event: string, data?: any) {   
    this.socket.emit(event, data);
  }
  
  listen(action: string): Observable<any> {
    return new Observable(observer => {
      this.socket.on(action, data => observer.next(data));
      // dispose of the action listener when unsubscribed
      return () => this.socket.off(action);
    });
  }

  disconnect() {
    this.socket.disconnect();
    this.connected$.next(false);
  }
}
