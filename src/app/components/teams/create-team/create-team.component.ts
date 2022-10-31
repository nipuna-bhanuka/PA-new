import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentModel } from 'src/app/models/department.model';
import { TeamModel } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  team = new TeamModel();
  isCreating = false;
  departments : any;

  constructor(private teamService : TeamService, private router: Router, private departmentService :DepartmentService) { }

  ngOnInit(): void {
    this.showDepartments();

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
    this.isCreating = true;
    console.log(this.team);
    this.teamService.create(this.team).subscribe({
      next: (res) => {
        if(res=='Team Create success...!'){
          alert("'Team Create success...!")
          this.isCreating = false;
          this.team = new TeamModel();
          this.router.navigate(["admin/team-list"]);
        }
      },
      error: (err) => {
        this.isCreating = false;
      },
    });
  }

}
