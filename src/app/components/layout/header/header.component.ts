import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

employee : any;
department : any;
team : any;

  constructor(private queryService : QueryService) { }

  ngOnInit(): void {
    this.employeeCount();
    this.departmentCount();
    this.teamCount();

  }

  employeeCount(){
    this.queryService.getAllEmployeeCount().subscribe({
      next : (res)=>{
        this.employee = res;
      }
    })

  }
  departmentCount(){
    this.queryService.getAllDepartmentsCount().subscribe({
      next : (res)=>{
        this.department =res;
      }
    })

  }
  teamCount(){
    this.queryService.getAllTeamsCount().subscribe({
      next : (res) => {
        this.team = res;
      }
     })

  }

}
