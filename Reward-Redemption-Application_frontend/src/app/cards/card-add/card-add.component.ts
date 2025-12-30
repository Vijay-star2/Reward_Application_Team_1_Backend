import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardService } from '../card.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-add.component.html'
})
export class CardAddComponent {

  cardNumber = '';
  cardType = '';
  customerId!: number;

  message = '';

  constructor(private service: CardService) {}

  addCard() {
    this.service.addCard({
      cardNumber: this.cardNumber,
      cardType: this.cardType,
      customerId: this.customerId
    }).subscribe({
      next: () => this.message = 'Card added successfully',
      error: () => this.message = 'Card already exists'
    });
  }
}
