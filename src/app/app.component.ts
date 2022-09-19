import { Component } from '@angular/core';
import { Profile } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  angularsProfile!: Profile[]

  eventReceivedFromChild(event: string) {
    alert(`You've clicked the Profile with the name "${event}"`);
  }

  eventReceivedFromSearch(event: string) {
    alert(`You've searched for "${event}"`);
  }
}
