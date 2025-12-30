import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './card-list.component.html'
})
export class CardListComponent {

  displayedColumns: string[] = ['id', 'name'];

  users: User[] = [
    { id: 1, name: 'Vijay' },
    { id: 2, name: 'Kumar' }
  ];
}