import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-addguild',
  standalone: true,
  imports: [RouterLink,NavbarComponent],
  templateUrl: './addguild.component.html',
  styleUrl: './addguild.component.css'
})
export class AddguildComponent implements OnInit {
  http=inject(HttpClient);
  res=[];
  users:any=[]
 token:string | null=''
  
  ngOnInit():void {
    this.geusers()
 }

 geusers(){
  this.token=localStorage.getItem('token')
  this.http.get("http://localhost:5000/api/user/userlist",
  { headers:{ Authorization: `Bearer ${this.token}`}}
  ).subscribe({
    next: (response: any) => {
      console.log(response);
      this.users = response },
    error: (error: HttpErrorResponse) => {
      console.error(error);
    }
  })
 }

add(newname:String,newformation:String,withInstuctor:String){
  this.token=localStorage.getItem('token')
  this.http.post("http://localhost:5000/api/guild",
  {name: newname,formation: newformation,instructor:withInstuctor},
  { headers:{ Authorization: `Bearer ${this.token}`}}).subscribe({
    next: (response: any) => {
      console.log(response);
      this.res = response
    },
    error: (error: HttpErrorResponse)=>{
      console.error(error);
    }
  })
 }}
