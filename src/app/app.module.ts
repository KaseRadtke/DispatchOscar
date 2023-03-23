import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { AppComponent } from './app.component';
import {environment} from "../environments/environments";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment),
    AngularFireMessagingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
