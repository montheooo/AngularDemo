import { Component } from '@angular/core';
import { data } from './card/card.data';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';
  cards : Card[] = data ;
}
