import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamModel } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  id : string = '';
  isUpdating = false;
  team : any;
  routeListener: any;
  employees: any;

  constructor(private teamService : TeamService , private route: ActivatedRoute , private router: Router, private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.id = JSON.parse(localStorage.getItem('id') || '{}');
    this.showTeamLeader(this.id);

    this.teamService.getTeam(this.id).subscribe({
      next: (res)=>{
        this.team = res;
        console.log(this.team.id);
      },
      error : (error)=>{
        console.log(error);
      },

    });
  }


  onSubmit() {
    console.log(this.team);
    this.isUpdating = true;
    this.teamService.update(this.team).subscribe({
      next: (res) => {
        if(res=="Team update success...!"){
          this.isUpdating = false;
          alert("Team Updated");
          console.log('response: ' + res);
          this.router.navigate(["admin/team-list"]);
        }

      },
      error: (err) => {
        this.isUpdating = false;
        console.log('Error: ' + err)
      },
    });
  }

  showTeamLeader(id: string){
    console.log(id);
    this.employeeService.getEmployeebyTeam(this.id).subscribe(
      (data: any)=>{
        this.employees = data,
        console.log(this.employees);
      }
    )
  }
}
