
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { StudentService } from '../../../core/services/student/student.service';


@Component({
  selector: 'app-addstudent',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css'] 
})
export class AddstudentComponent  {

  res: any = [];
  data: any;

 constructor(private StudentService:StudentService){}
  ngOnInit(){

    this.StudentService.GetStudents().subscribe({
      next: (response: any) => {
        this.data = response },
      error: (error:any) => {
         throw error
      }
    }) 
 }
add(newEmail: string, newName: string, newPhone: string, inGuild: string, newFormation: string): void {
   
 this.StudentService.AddStudent({ email: newEmail, name: newName, phone: newPhone, formation: newFormation, guild: inGuild })
 .subscribe({
      next: (response: any) => {
        console.log(response);
        this.res = response },
      error: (error: any) => {
        console.error(error);
      }
    })
}
}
