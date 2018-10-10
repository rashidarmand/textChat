import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Observable<any[]>;

  constructor(public db:AngularFireDatabase) {
    this.messages = db.list('chat_messages').valueChanges();
   }

  ngOnInit() {
    this.getChatData();
  }

  getChatData() {
    return this.messages
  }

  newMessage(message) {
    this.db.list('chat_messages').push(message);
  }

}
