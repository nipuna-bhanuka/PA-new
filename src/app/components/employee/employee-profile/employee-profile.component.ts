import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { DesignationModel } from 'src/app/models/designation.model';
import { DesignationService } from 'src/app/services/designation.service';
import { DepartmentService } from 'src/app/services/department.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
employee : any;
userDetails: any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private authService: AuthService) { }

  ngOnInit(): void{
    this.authService.getUserProfile().subscribe({
      next: res => {
        console.log(res);
        this.userDetails = res;

      },
      error :err => {
        console.log(err);
      },
    });
  }

  findEmployee(id: string) {
 }
}
