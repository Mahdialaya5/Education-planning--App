import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, tap } from 'rxjs';
import { environment } from '../../../environment/environment.development';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private readonly cookieName = 'token';
  private url: string  = `${environment.BaseURL}/api/user`;
  currentuser:any

  constructor( private http: HttpClient ) {}

  login(data: any) {
    return this.http
      .post<{ token: string }>(`${this.url}/login`, data)
      .pipe(
        tap((res) => {
          this.isAuthenticated.next(true);
          localStorage.setItem('token',res.token)
        }),
        catchError((err) => {
          throw err;
        })
      );
  }

  getCurrentUser() {
    return this.http
      .get<{ data: any }>(`${this.url}/current`)
      .pipe(
        tap((response: any) => {
          this.currentuser = response;
        }),
        catchError((err) => {
          throw err;
        })
      );
  }


  isLoggedIn() {
    const tokenExists = !!localStorage.getItem(this.cookieName);
    this.isAuthenticated.next(tokenExists);
    return this.isAuthenticated.asObservable();
  }
}