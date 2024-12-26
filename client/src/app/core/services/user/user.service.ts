import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environment/environment.development';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.BaseURL}/api/user`;

  error: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  register(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`,data).pipe(
      tap(() => {
        this.router.navigate(['/']);
      }),
      catchError((err) => {
        this.error = err.message;
        throw err;
      })
    );
  }

  getUsers(): any {
    return this.http.get<any>(`${this.apiUrl}/userlist`).pipe(map((response: any) => response));
  }
}