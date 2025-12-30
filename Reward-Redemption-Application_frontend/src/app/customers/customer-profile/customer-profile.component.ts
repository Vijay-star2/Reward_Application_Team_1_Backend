import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-profile.component.html'
})
export class CustomerProfileComponent {
  customer = {
    name: 'Vijay',
    rewardPoints: 30000
  };
}
