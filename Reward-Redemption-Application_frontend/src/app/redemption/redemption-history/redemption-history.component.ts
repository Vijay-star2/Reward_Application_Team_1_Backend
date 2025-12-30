import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RedemptionService } from '../redemption.service';
import { Redemption } from '../redemption/redemption.module';


@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './redemption-history.component.html'
})
export class RedemptionHistoryComponent {

  customerId!: number;
  history: Redemption[] = [];

  constructor(private service: RedemptionService) {}

  load() {
    this.service.history(this.customerId)
      .subscribe(res => this.history = res);
  }
}
