import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-department-head-dashboard',
  templateUrl: './department-head-dashboard.component.html',
  styleUrls: ['./department-head-dashboard.component.css']
})
export class DepartmentHeadDashboardComponent implements OnInit {
  shouldbarChart : boolean  = false;
  shouldRadarChart : boolean  = false;
  data1 : any;
  data3 : any = [];
  id: string = '344E3DD1-72F8-4DB4-B048-08DA581D9A58';
  constructor(private resultService : ResultService) { }

  ngOnInit(): void {
    this.bargraph(this.id);
    this.redargraph(this.id);
  }

  bargraph(id : string){
    this.resultService.getTotalbyGroups(this.id).subscribe({
      next: (res)=> {
        console.log("bar chart value");
        console.log(res);
        this.data3 = res;
        this.shouldbarChart = true;
      },
      error: (error)=> {
        console.log(error);

      }
    })
  }

  redargraph(id : string){
    this.resultService.getTotalDepartment(this.id).subscribe({
      next : (res)=>{
        console.log("radar chart value");
        console.log(res);
        this.data1 = res;
        this.shouldRadarChart = true;
      },
      error: (error)=> {
        console.log(error);

      }
    })
  }

}
