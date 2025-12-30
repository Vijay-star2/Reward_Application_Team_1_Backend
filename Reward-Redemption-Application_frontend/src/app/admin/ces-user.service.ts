import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CesUser } from './ces-user/ces-user.module';

@Injectable({ providedIn: 'root' })
export class CesUserService {

  private baseUrl = 'http://localhost:8080/admin/ces-users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CesUser[]> {
    return this.http.get<CesUser[]>(this.baseUrl);
  }

  create(user: CesUser): Observable<void> {
    return this.http.post<void>(this.baseUrl, user);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
