import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <h3>Reward Redemption Portal</h3>
      <button>Logout</button>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      background: #1976d2;
      color: white;
    }
  `]
})
export class HeaderComponent {}