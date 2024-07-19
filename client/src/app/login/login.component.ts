import { NgIf } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, NgIf, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  private http = inject(HttpClient); 
  error: string | null = null;

  constructor(private router: Router) {}

  login(email_user: string, password_user: string): void {
    this.http.post<{ token: string }>("http://localhost:5000/api/user/login",{email:email_user,password:password_user})
      .pipe(
        catchError(this.handleError)
      ).subscribe({
        next: (response) => {
          localStorage.setItem("token", response.token);
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.error = 'Bad credentials';
          console.error( err);
        }
      });
  }
private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
       console.error('An error occurred:',error) }
    else {
     console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
  return of()
  }
}
