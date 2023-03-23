import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private messaging: AngularFireMessaging) {
    this.requestPermission();
  }

  requestPermission() {
    this.messaging.requestToken.subscribe(
      (token) => {
        console.log('Permission granted! Save to the server!', token);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
