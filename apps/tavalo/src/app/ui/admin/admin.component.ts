import { Component } from '@angular/core';
import { WebSocketService } from '../../service/web-socket.service';

@Component({
  selector: 'tavalo-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent  {

  activeUsers$ = this.service.activeUsers$;
  constructor(private service: WebSocketService) { }
}
