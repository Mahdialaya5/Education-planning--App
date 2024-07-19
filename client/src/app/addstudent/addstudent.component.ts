import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-addstudent',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css'] 
})
export class AddstudentComponent implements OnInit {
  private http = inject(HttpClient); 
  res: any = [];
  data: any;

  ngOnInit(): void {
    this.getGuilds();
  }
  private getGuilds(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    this.http.get("http://localhost:5000/api/guild",{headers})
    .subscribe({
      next: (response: any) => {
        console.log(response);
        this.data = response },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      }
    })
  }

  add(newEmail: string, newName: string, newPhone: string, inGuild: string, newFormation: string): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.post("http://localhost:5000/api/student",
      { email: newEmail, name: newName, phone: newPhone, formation: newFormation, guild: inGuild },
      { headers}
    ).subscribe({
      next: (response: any) => {
        console.log(response);
        this.res = response },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      }
    })
  }

  
}
