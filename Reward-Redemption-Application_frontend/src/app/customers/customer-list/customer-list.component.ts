import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  page = 0;
  size = 5;
  totalPages = 0;

  search = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService
      .getCustomers(this.page, this.size, this.search)
      .subscribe(res => {
        this.customers = res.content;
        this.totalPages = res.totalPages;
      });
  }

  next(): void {
    if (this.page + 1 < this.totalPages) {
      this.page++;
      this.loadCustomers();
    }
  }

  previous(): void {
    if (this.page > 0) {
      this.page--;
      this.loadCustomers();
    }
  }

  onSearch(): void {
    this.page = 0;
    this.loadCustomers();
  }
}
