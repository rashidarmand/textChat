import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AppComponent } from './app.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { ChatComponent } from './chat/chat.component';
import * as firebaseInfo from './private';

let apiKey = firebaseInfo.apiKey;
let authDomain = firebaseInfo.authDomain;
let databaseURL = firebaseInfo.databaseURL;
let projectId = firebaseInfo.projectId;
let storageBucket = firebaseInfo.storageBucket;
let messagingSenderId = firebaseInfo.messagingSenderId;

export const environment = {
  production: false,
  firebase: {
    // Initialize Firebase
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId
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
