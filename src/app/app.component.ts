import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChildComponent } from './child/child.component';
import {MapComponent} from './map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WelcomeComponent,
    ChildComponent,
    MapComponent   // Import du composant autonome Map
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  // Propriétés pour gérer la communication avec l'enfant
  parentMessage: string = 'Salut depuis le parent !';
  childMessage: string = '';

  // Méthode pour recevoir la notification de l’enfant
  handleNotification(message: string): void {
    this.childMessage = message;
  }
}

