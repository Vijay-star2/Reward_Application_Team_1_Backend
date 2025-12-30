import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';
import { Page } from '../shared/page/page.module';


@Injectable({ providedIn: 'root' })
export class CustomerService {

  private baseUrl = 'http://localhost:8088/api/customers';

  constructor(private http: HttpClient) {}

  getCustomers(
    page: number,
    size: number,
    search: string
  ): Observable<Page<Customer>> {

    let params = new HttpParams()
      .set('page', page)
      .set('size', size);

    if (search) {
      params = params.set('search', search);
    }

    return this.http.get<Page<Customer>>(this.baseUrl, { params });
  }
}
