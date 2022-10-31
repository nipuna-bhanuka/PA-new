import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignationModel } from 'src/app/models/designation.model';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  designations : any;

  employee = new EmployeeModel();
  constructor(private employeeService: EmployeeService, private designationService: DesignationService, private router: Router) { }

  ngOnInit(): void {
    this.showDesignations();
  }
  showDesignations(){
    this.designationService.getList().subscribe(
      (data: any)=>{
        this.designations = data,
        console.log(this.designations);
      }
    )
  }

  onSubmit() {
    this.employeeService.create(this.employee).subscribe({
      next: (res) => {
        if(res == "Employee Create success...!"){
          alert("Employee create sucess")
          this.employee = new EmployeeModel();
          this.router.navigate(["admin/employee-list"]);
        }

      },
      error: (err) => {
        alert("Something went wrong");
      },
    });

  }

}
