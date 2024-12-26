import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { GuildService } from '../../../core/services/guild/guild.service';

@Component({
  selector: 'app-guildlist',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './guildlist.component.html',
  styleUrl: './guildlist.component.css',
})
export class GuildlistComponent {
  data: any = [];

  constructor(private GuildServices: GuildService) {}

  ngOnInit() {
    this.GuildServices.GetGuild().subscribe({
      next: (res: any) => {
        this.data = res;
      },
      error: (error: any) => {
        throw error;
      },
    });
  }
}
