import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reward } from '../../../rewards/reward.model';
import { RewardSummaryComponent } from '../../../rewards/reward-summary/reward-summary.component';

@Component({
  standalone: true,
  imports: [CommonModule, RewardSummaryComponent],
  templateUrl: './reward-cart.component.html'
})
export class RewardCartComponent {

  cart: Reward[] = [];
  availablePoints = 30000;

  addToCart(reward: Reward) {
    this.cart.push(reward);
  }

  get totalPoints() {
    return this.cart.reduce((s, r) => s + r.points, 0);
  }

  redeemAll() {
    alert('Rewards redeemed successfully');
    this.cart = [];
  }
}