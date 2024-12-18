import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  message: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.message = this.dataService.getWelcomeMessage();
  }
}
