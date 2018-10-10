import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { AppComponent } from './app.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { ChatComponent } from './chat/chat.component';

export const environment = {
  production: false,
  firebase: {
  // Initialize Firebase
    apiKey: "AIzaSyCnIpzoTr0DV6uxqjvxFJh_YX9kRceAlQM",
    authDomain: "testchat-d8acc.firebaseapp.com",
    databaseURL: "https://testchat-d8acc.firebaseio.com",
    projectId: "testchat-d8acc",
    storageBucket: "testchat-d8acc.appspot.com",
    messagingSenderId: "302466631910"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
