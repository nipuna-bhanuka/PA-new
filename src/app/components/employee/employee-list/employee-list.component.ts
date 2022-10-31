import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { DesignationModel } from 'src/app/models/designation.model';
import { DesignationService } from 'src/app/services/designation.service';
import { DepartmentService } from 'src/app/services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  isLoading = false;
  show : Boolean = false;
  employeeList: EmployeeModel[] | undefined;
  employee: any;
  isUpdating = false;
  id : string='';
  designations : any;
  departments : any;

  @ViewChild('scroll') scroll!: ElementRef;

  constructor(private employeeService: EmployeeService, private designationService: DesignationService, private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
    this.getList();
    this.showDepartments();
  }

  getList() {
    this.isLoading = true;
    this.employeeService.getList().subscribe({
      next: (res) => {
        this.employeeList = res;
        this.isLoading = false;
        console.log(this.employeeList);
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }


  delete(id: any){
    let text= "Do you want to delete the employee?"
    if(confirm(text)==true){
    this.employeeService.delete(id).subscribe({
      next: (res) =>{
        if(res=="Delete employee sucess..!"){
          alert("Employee deleted");
          console.log(res);
          this.getList();
          this.router.navigate(["admin/employees-list"]);

        }
      },
    error : (error)=>{
      console.log(error);
      this.isLoading = false;
      console.log(error);
      alert("Employee can't delete")
    },
  });
}
  }

  scrollUp() {
    this.scroll.nativeElement.scrollUp = 0;
  }

  edit(id : string){
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
  showDesignations(){
    this.designationService.getList().subscribe(
      (data: any)=>{
        this.designations = data,
        console.log(this.designations);
      }
    )
  }
  showDepartments(){
    this.departmentService.getList().subscribe(
      (data: any)=>{
        this.departments = data,
        console.log(this.departments);
      }
    )
  }

  onSubmit() {
    console.log(this.employee);
    this.isUpdating = true;
    this.show=false;
    this.employeeService.putData(this.employee).subscribe({
      next: (res) => {
        this.isUpdating = false;
        alert("Employee Updated");
        console.log('response: ' + res);
        this.getList();

      },
      error: (err) => {
        this.isUpdating = false;
        console.log('Error: ' + err)
      },
    });
  }
}
