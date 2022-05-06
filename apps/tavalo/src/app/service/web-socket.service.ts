import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  activeUsers$ = this.socket.fromEvent<unknown>('patientList');

  constructor(private socket: Socket) {
  }

  sendMessage(msg: unknown) {
    this.socket.emit('patientJoin', msg);
  }
  close() {
    this.socket.disconnect();
  }

  public userPing(userName: unknown): void {
    this.sendMessage(userName);
  }
}
