import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  http = inject(HttpClient);
  res: any[] = [];
  token: string | null = '';

  add(newEmail: string, newName: string, newPassword: string): void {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.http.post("http://localhost:5000/api/user/register", 
        { email: newEmail, name: newName, password: newPassword },
        { headers: { Authorization: `Bearer ${this.token}`}}
      ).subscribe({
        next: (response: any) => {
          console.log(response);
          this.res = response;
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error adding user', error);
        }
      });
    } 
  }
}

