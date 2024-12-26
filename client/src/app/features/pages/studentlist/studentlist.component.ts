import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { StudentService } from '../../../core/services/student/student.service';

@Component({
  selector: 'app-studentlist',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css',
})
export class StudentlistComponent {
  
  data: any = [];
  constructor(private StudentService: StudentService) {}
  ngOnInit(): void {
    this.StudentService.GetStudents().subscribe({
      next: (response: any) => {
        this.data = response;
      },
      error: (error: any) => {
        throw error;
      },
    });
  }
}
