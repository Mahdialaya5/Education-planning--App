import { NgIf } from '@angular/common';
import { Component,} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { AuthService } from '../../../core/auth/auth.services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, NgIf, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {

  error: string | null = null;


 constructor(private router: Router,private AuthService:AuthService) {}

  login(email_user: string, password_user: string): void {
    this.AuthService.login({email:email_user,password:password_user}).subscribe({
        next: (response) => {
          localStorage.setItem("token", response.token);
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.error = err.msg;
        }
      });
  }

}
