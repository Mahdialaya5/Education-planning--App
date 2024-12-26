import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth/auth.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  current_user: any = [];
  token: any;
  title = 'planning-app';
  constructor(private Auth: AuthService) {}
  ngOnInit(): void {
    this.Auth.isLoggedIn().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.Auth.getCurrentUser().subscribe({
          next: (res: any) => {
            this.current_user = res;
          },
          error: (error: any) => {
            throw error;
          },
        });
      }
    });
  }
}
