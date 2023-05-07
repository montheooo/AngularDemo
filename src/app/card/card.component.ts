import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  card!: Card ;

  @Output()
  OnCardSelect = new EventEmitter<Card>();

  handleClick(){
    this.OnCardSelect.emit(this.card);
   // console.log(this.card);
  }




}
