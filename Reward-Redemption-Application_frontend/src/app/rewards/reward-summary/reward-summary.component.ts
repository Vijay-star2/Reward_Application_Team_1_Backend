import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reward } from '../reward.model';

@Component({
  selector: 'app-reward-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reward-summary.component.html'
})
export class RewardSummaryComponent {

  @Input() availablePoints!: number;
  @Input() cart: Reward[] = [];

  get totalPoints(): number {
    return this.cart.reduce((sum, r) => sum + r.points, 0);
  }

  get eligible(): boolean {
    return this.totalPoints <= this.availablePoints;
  }
}