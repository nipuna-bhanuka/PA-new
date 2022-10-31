import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  department = new DepartmentModel();
  isCreating = false;

  constructor(private departmentService : DepartmentService ,private router: Router) { }

  ngOnInit(): void {}

  onSubmit() {
    this.isCreating = true;

    this.departmentService.create(this.department).subscribe({
      next: (res) => {
         console.log('h');
        if(res){
          alert("Department created");
          console.log(res);
          this.isCreating = false;
        this.department = new DepartmentModel();
        this.router.navigate(["admin/departments-list"]);
        }

      },
      error: (err) => {
        this.isCreating = false;
      },
    });
  }

}
