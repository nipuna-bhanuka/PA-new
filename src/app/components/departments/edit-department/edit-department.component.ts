import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  id : string = '';
  isUpdating = false;
  department : any ;
  routeListener: any;
  employees : any;
  departmentHead: any
  constructor(private departmentService : DepartmentService, private employeeService : EmployeeService ,private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.id = JSON.parse(localStorage.getItem('id') || '{}');
    this.showDepartmentHead(this.id);
    this.departmentService.getDepartment(this.id).subscribe({
      next: (res)=>{
        this.department = res;
        console.log(this.department.id);
      },
      error : (error)=>{
        console.log(error);
      },

    });


    // this.routeListener = this.route.params.subscribe(async (params) => {
    //    this.id = params["id"];
    //    console.log(typeof(this.id));
    //   this.department = await this.departmentService.getDepartment(this.id);
    //   console.log(this.department.id);
    // });
  }

  onSubmit() {
    console.log(this.department);
    this.isUpdating = true;
    this.departmentService.update(this.department).subscribe({
      next: (res) => {
        if(res=='Department update success...!'){
          this.isUpdating = false;
          alert("Department Updated");
          console.log('response: ' + res);
          this.router.navigate(["admin/departments-list"]);
        }
      },
      error: (err) => {
        this.isUpdating = false;
        console.log('Error: ' + err);
        alert("Department not updated...!")
      },
    });
  }

  showDepartmentHead(id: string){
    console.log(id + 'did');
    this.employeeService.getEmployeebyDepartment(id).subscribe({
      next: (res)=>{
        this.employees = res,
        console.log("defbrgbrg")
       console.log(this.employees);
      }

    })
  }


}


