import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cart',
  imports: [CommonModule],
  template: `<h3>Reward Cart (Redeem All Items)</h3>`
})
export class CartComponent {}