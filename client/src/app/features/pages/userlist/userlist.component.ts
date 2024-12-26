import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css',
})
export class UserlistComponent {
  data: any = [];
  constructor(private UserServices: UserService) {}
  ngOnInit() {
    this.UserServices.getUsers().subscribe({
      next: (res: any) => {
        this.data = res;
      },
      error: (error: any) => {
        throw error;
      },
    });
  }
}
