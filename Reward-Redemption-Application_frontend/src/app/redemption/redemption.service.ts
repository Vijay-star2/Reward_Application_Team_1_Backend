import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Redemption } from './redemption/redemption.module';

@Injectable({ providedIn: 'root' })
export class RedemptionService {

  private baseUrl = 'http://localhost:8080/redemptions';

  constructor(private http: HttpClient) {}

  history(customerId: number): Observable<Redemption[]> {
    return this.http.get<Redemption[]>(
      `${this.baseUrl}/customer/${customerId}`
    );
  }
}
