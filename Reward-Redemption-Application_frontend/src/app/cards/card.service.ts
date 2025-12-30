import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './card.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CardService {

  private baseUrl = `http://localhost:8080/cards`;

  constructor(private http: HttpClient) {}

  addCard(card: Card): Observable<void>{
    return this.http.post<void>('$this.baseUrl}', card);
  }

  getCardsByCustomer(customerId: number): Observable<Card[]> {
    return this.http.get<Card[]>('${this.baseUrl}/customer/${customerId}');
  }
}