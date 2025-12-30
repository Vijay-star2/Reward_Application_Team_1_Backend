import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardService } from '../reward.service';
import { Reward } from '../reward.model';

@Component({
  selector: 'app-reward-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reward-catalog.component.html'
})
export class RewardCatalogComponent implements OnInit {

  rewards: Reward[] = [];

  constructor(private service: RewardService) {}

  ngOnInit(): void {
    this.service.getAllRewards().subscribe((res: Reward[]) => {
      this.rewards = res;
    });
  }
}