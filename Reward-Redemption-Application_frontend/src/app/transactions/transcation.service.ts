import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transcation/transcation.module';

@Injectable({ providedIn: 'root' })
export class TransactionService {

  private baseUrl = 'http://localhost:8080/transactions';

  constructor(private http: HttpClient) {}

  generate(cardId: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/generate/${cardId}`, {});
  }

  getByCard(cardId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/card/${cardId}`);
  }
}
