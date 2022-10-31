import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-team-member-dashboard',
  templateUrl: './team-member-dashboard.component.html',
  styleUrls: ['./team-member-dashboard.component.css']
})
export class TeamMemberDashboardComponent implements OnInit {
  // resultList: ResultModel[] | undefined = [];
  data1 : any;
  data2 : any = [];
  data3 : any = [];
  id: string = 'D5E039E1-3321-4341-AF8E-08DA58691889';
  shouldDrawChart : boolean  = false;
  shouldRadarChart : boolean = false;

  constructor(private resultService : ResultService) { }

  ngOnInit(): void {
    this.marks(this.id);
    this.redargraph(this.id);
  }

  marks(id : string){
  this.resultService.getGroupTotalbyReviwee(this.id).subscribe({
    next: (res) => {
      console.log(res);

      //var data = res;
      // this.resultList = res;
      //console.log(this.resultList);
      this.data3 = res;
      this.shouldDrawChart = true;
    },
    error: (error) => {
      console.log(error);

    }
  });
  }


  redargraph(id : string){
    this.resultService.getReviweeTotal(this.id).subscribe({
      next: (res)=> {
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






