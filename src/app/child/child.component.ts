import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // Propriété pour recevoir un message du parent
  @Input() parentMessage: string = '';

  // Propriété pour envoyer une notification au parent
  @Output() notifyParent: EventEmitter<string> = new EventEmitter();

  // Méthode pour déclencher l'événement
  sendNotification(): void {
    this.notifyParent.emit('Message reçu par l’enfant !');
  }
}
