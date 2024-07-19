import { Component, OnInit, inject } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  http=inject(HttpClient);
  current_user:any=[];
  token:any
 title="first-app"
  ngOnInit():void {
     this.getcurrent()
  }
   getcurrent(){
    this.token=localStorage.getItem('token')
      this.http.get("http://localhost:5000/api/user/current",{ headers: { Authorization: `Bearer ${this.token}` }}).subscribe((data:any)=>{
        console.log(data)
      this.current_user=data})
   }

}
