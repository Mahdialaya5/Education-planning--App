import { NgIf } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 constructor(private router: Router, private http: HttpClient) {}
 
 token: string | null = '';
  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.http.get("http://localhost:5000/api/user/current",{headers:{Authorization:`Bearer ${this.token}`}})
        .subscribe({
          next:(data: any)=>{
            console.log(data);
          },
          error: (error: HttpErrorResponse) => {
            console.error('Error fetching current user', error);
          }
        });
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}


