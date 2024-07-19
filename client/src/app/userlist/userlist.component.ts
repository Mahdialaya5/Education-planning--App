import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [RouterLink,NavbarComponent],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {
  http=inject(HttpClient);
  data:any=[];
 token:string | null = '';
  ngOnInit():void {
     this.getuser()
  }
   getuser(){
    this.token=localStorage.getItem('token')
    this.http.get("http://localhost:5000/api/user/userlist",
    { headers:{ Authorization: `Bearer ${this.token}`}}
    ).subscribe({
      next: (response: any) => {
        console.log(response);
        this.data = response},
      error: (error: HttpErrorResponse) => {
        console.error(error);
      }
    })
   }

}
