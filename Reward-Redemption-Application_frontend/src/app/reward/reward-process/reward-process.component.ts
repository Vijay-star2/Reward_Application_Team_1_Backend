import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RewardService } from '../../rewards/reward.service';
import { Reward } from '../../rewards/reward.model';
import { RewardSummary } from '../../rewards/reward-summary/reward-summary.module';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reward-process.component.html'
})
export class RewardProcessComponent {

  customerId!: number;
  result?: RewardSummary ; 

  constructor(private rewardService: RewardService) {}

  processRewards() {
    this.rewardService.process(this.customerId)
      .subscribe(res => this.result = res);
  }
}

