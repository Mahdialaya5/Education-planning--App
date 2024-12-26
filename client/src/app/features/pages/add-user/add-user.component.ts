import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  res: any;
  constructor(private UserServices: UserService) {}
  add(newEmail: string, newName: string, newPassword: string): void {
    this.UserServices.register({email: newEmail,name: newName,password: newPassword }).subscribe({
      next: (res) => {
        this.res = res;
      },
      error: (error) => {
        throw error;
      },
    });
  }
}
