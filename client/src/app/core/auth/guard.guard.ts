import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private AuthService: AuthService, private router: Router) {}

  canActivate(): void {
    this.AuthService.isLoggedIn().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/']);
        window.location.reload()
        return false;
        
      }
    });
  }
}