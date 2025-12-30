import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../transcation.service';
import { Transaction } from '../transcation/transcation.module';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transcation-list.component.html'
})
export class TransactionListComponent {

  cardId!: number;
  transactions: Transaction[] = [];

  constructor(private service: TransactionService) {}

  generate() {
    this.service.generate(this.cardId).subscribe(() => alert('50 transactions generated'));
  }

  load() {
    this.service.getByCard(this.cardId).subscribe(res => this.transactions = res);
  }
}
