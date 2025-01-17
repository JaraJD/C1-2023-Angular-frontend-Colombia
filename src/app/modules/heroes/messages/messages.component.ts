import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'sofka-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}
  
}
