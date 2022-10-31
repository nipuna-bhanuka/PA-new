import { Component, OnInit } from '@angular/core';
import { ResultModel } from 'src/app/models/result.model';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  // resultList: ResultModel[] | undefined = [];
 data1 : any;
 data2 : any = [];
  shouldDrawChart : boolean  = false;
  shouldRadarChart : boolean = false;

  constructor(private resultService : ResultService) { }

  ngOnInit(): void {
    this.barGraph();
    this.radarGraph();
  }

  barGraph(){
  this.resultService.getAdmintoDepartmentMarks().subscribe({
    next: (res) => {
      console.log('admin bar graph');

      console.log(res);

      var data = res;
      // this.resultList = res;
      //console.log(this.resultList);
      this.data2 = res;
      this.shouldDrawChart = true;
    },
    error: (error) => {
      console.log(error);

    }
  });

 }

 radarGraph(){
  this.resultService.getAdmintoTotalMarks().subscribe({
    next: (res) => {
      console.log('helllo minura');

      console.log(res);

      var data1 = res;
      // this.resultList = res;
      //console.log(this.resultList);
      this.data1 = res;
      console.log(this.data1);

      this.shouldRadarChart = true;
    },
    error: (error) => {
      console.log(error);

    }
  });

 }

}
