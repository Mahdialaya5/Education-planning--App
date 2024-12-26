import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { UserService } from '../../../core/services/user/user.service';
import { GuildService } from '../../../core/services/guild/guild.service';

@Component({
  selector: 'app-addguild',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './addguild.component.html',
  styleUrl: './addguild.component.css',
})
export class AddguildComponent {
  res = [];
  users: any = [];
  constructor(
    private UserServices: UserService,
    private GuildServices: GuildService
  ) {}
  ngOnInit() {
    this.UserServices.getUsers().subscribe({
      next: (res: any) => {
        this.users = res;
      },
      error: (error: any) => {
        throw error;
      },
    });
  }

  add(newname: String, newformation: String, withInstuctor: String) {
    this.GuildServices.AddGuild({
      newname,
      newformation,
      withInstuctor,
    }).subscribe({
      next: (response: any) => {
        this.res = response;
      },
      error: (error) => {
       throw error
      },
    });
  }
}
