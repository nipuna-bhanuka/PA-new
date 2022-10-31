import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/app/models/team.model';
import { DepartmentService } from 'src/app/services/department.service';
import { TeamService } from 'src/app/services/team.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employee.model';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {
  isLoading = false;
  employees: EmployeeModel[] | undefined;
  team: any;
  employee: any;
  show: Boolean = false;
  teamId : string = '';
  constructor(private teamService: TeamService, private departmentService :DepartmentService, private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.teamId = JSON.parse(localStorage.getItem('id') || '{}');
    this.getEmployeebyTeam(this.teamId);
    this.getTeam(this.teamId);
  }

  getEmployeebyTeam(teamId : string ){
    this.isLoading = true;
    this.employeeService.getEmployeebyTeam(this.teamId).subscribe({
      next: (res) => {
        this.employees = res;
        this.isLoading = false;
      },
      error: (error) => {

        this.isLoading = false;
      },
    });

  }

  getTeam(teamId : string){
    this.teamService.getTeam(this.teamId).subscribe({
      next:(res)=>{
        this.team = res;
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

  showList(){
    this.show = !this.show;
  }

}
