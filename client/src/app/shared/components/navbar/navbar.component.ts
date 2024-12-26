import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.services';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

 IsAuth: boolean | undefined;

  constructor(private router: Router,private AuthService:AuthService) {}
 
  ngOnInit() {
    this.AuthService.isLoggedIn().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.IsAuth = true;
      } else {
        this.IsAuth = false;
      }
    });
  }

logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}


