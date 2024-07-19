import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-guildlist',
  standalone: true,
  imports: [RouterLink,NavbarComponent],
  templateUrl: './guildlist.component.html',
  styleUrl: './guildlist.component.css'
})
export class GuildlistComponent  implements OnInit {

  http=inject(HttpClient);
  data:any=[];
   token:any

  ngOnInit():void {
     this.getguilds()
  }

   getguilds(){
      this.token=localStorage.getItem('token')
      this.http.get("http://localhost:5000/api/guild",
      { headers:{ Authorization: `Bearer ${this.token}`}}
      ).subscribe({
        next: (response: any) => {
          console.log(response);
          this.data = response },
        error: (error: HttpErrorResponse) => {
          console.error(error);
        }
      })
   }
}
