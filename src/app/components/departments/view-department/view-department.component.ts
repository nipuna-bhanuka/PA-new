import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/app/models/team.model';
import { EmployeeModel } from 'src/app/models/employee.model';
import { DepartmentService } from 'src/app/services/department.service';
import { TeamService } from 'src/app/services/team.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  departmentId : string = '';
  isLoading = false;
  teams: TeamModel[] | undefined;
  department: any;
  employees: EmployeeModel[] | undefined;
  show : Boolean = false;
  id : string = '';
  employee: any;
  isUpdating : Boolean = false;

  constructor(private teamService: TeamService, private departmentService :DepartmentService, private employeeService : EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.departmentId = JSON.parse(localStorage.getItem('id') || '{}');
    this.getDepartment(this.departmentId);
    this.getListbyDepartmentId(this.departmentId);

  }

  getDepartment(id:string){
    this.isLoading = true;
    this.departmentService.getDepartment(id).subscribe({
      next: (res) => {
        this.department = res;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  getListbyDepartmentId(departmentId : string){
    this.isLoading = true;
    this.teamService.getListbyDepartmentId(departmentId).subscribe({
      next: (res) => {
        this.teams = res;
        console.log(res);
        this.isLoading = false;
        this.router.navigate(["admin/view-department"]);
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
    this.employeeService.getEmployeebyDepartment(departmentId).subscribe({
      next: (res) => {
        this.employees = res;
        console.log(res);
       // this.isLoading = false;
        this.router.navigate(["admin/view-department"]);
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  onSubmit() {
    console.log(this.employee);
    this.isUpdating = true;
    this.show=false;
    this.employeeService.putData(this.employee).subscribe({
      next: (res) => {
        this.isUpdating = false;
        alert("Team Updated");
        console.log('response: ' + res);
        this.router.navigate(["admin/view-department"]);
      },
      error: (err) => {
        this.isUpdating = false;
        console.log('Error: ' + err)
      },
    });
  }

  editTeam(id : string){
    this.id = id;
    this.show =true;
    console.log(this.id);
    this.employeeService.getEmployee(this.id).subscribe({
      next: (res)=>{
        this.employee = res;

      },
      error : (error)=>{
        console.log(error);
        console.log(this.employee.id);
      },
    });
}
}
