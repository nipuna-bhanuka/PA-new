import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  isLoading = false;
  teamList: TeamModel[] | undefined;
  department: any;

  constructor(private teamService: TeamService, private departmentService :DepartmentService) { }

  ngOnInit(): void {
    this.getList();
  }


  getList() {
    this.isLoading = true;
    this.teamService.getList().subscribe({
      next: (res) => {
        this.teamList = res;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }
  delete(id: string){
      alert("Do you want to delete the team?");
      this.teamService.delete(id).subscribe({
        next: (res) =>{
          if(res=="Team delete sucessful"){
            this.getList();
            alert(res);
          }
        },
      error : (error)=>{
        console.log(error);
        this.isLoading = false;
        alert("Something went wrong")
      },
    });
    }

  edit(id: string){
    localStorage.setItem('id',JSON.stringify(id))
  }
  view(id: string){
    localStorage.setItem('id',JSON.stringify(id))
  }


}
