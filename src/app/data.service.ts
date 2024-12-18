import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getWelcomeMessage(): string {
    return 'Bienvenue dans Angular depuis un service !';
  }
}
