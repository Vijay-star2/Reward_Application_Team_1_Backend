import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CesUserService } from '../ces-user.service';
import { CesUser } from '../ces-user/ces-user.module';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ces-user-list.component.html'
})
export class CesUserListComponent implements OnInit {

  users: CesUser[] = [];
  username = '';
  role: 'ADMIN_CES' | 'CES' = 'CES';

  constructor(private service: CesUserService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAll().subscribe(res => this.users = res);
  }

  create() {
    this.service.create({ username: this.username, role: this.role, active: true })
      .subscribe(() => {
        this.username = '';
        this.load();
      });
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => this.load());
  }
}
