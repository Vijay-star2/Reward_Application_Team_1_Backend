import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reward } from './reward.model';
import { RewardSummary } from './reward-summary/reward-summary.module';


@Injectable({ providedIn: 'root' })
export class RewardService {

  private baseUrl = 'http://localhost:8080/rewards';

  constructor(private http: HttpClient) {}

  getAllRewards(): Observable<Reward[]> {
    return this.http.get<Reward[]>(`${this.baseUrl}`);
  }

  process(customerId: number): Observable<RewardSummary> {
    return this.http.post<RewardSummary>(
      `${this.baseUrl}/process/${customerId}`, {}
    );
  }
}