import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="sidebar">
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="#">Customers</a>
      <a routerLink="/customers/add">Add Customer</a>
      <a routerLink="#">Cards</a>
      <a routerLink="/cards">View Cards</a>
      <a routerLink="/cards/add">View Cards</a>
      <a routerLink="#">Rewards</a>
    </nav>
  `,
  styles: [`
    .sidebar {
      width: 200px;
      background: #eeeeee;
      height: 100vh;
      padding: 10px;
    }
    a {
      display: block;
      margin: 10px 0;
      text-decoration: none;
    }
  `]
})
export class SidebarComponent {}