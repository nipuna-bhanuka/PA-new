import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { Data } from '@angular/router';
import { ResultModel } from 'src/app/models/result.model';

@Component({
  selector: 'app-admin-bargraph',
  templateUrl: './admin-bargraph.component.html',
  styleUrls: ['./admin-bargraph.component.css']
})
export class AdminBargraphComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() data: any[] = [];
  @Input() fromWhere : string = "";
  resultList: ResultModel[] = [];
  label: string[] = [];
  data1: number[] = [];
  data2: number[] = [];
  departments: string[] = [];
  isloading: Boolean = true
  label1: string = '';
  label2: string = '';
  max! : number;

  constructor() { }

  ngOnInit(): void {

        this.adminDashboard();

  }


  adminDashboard(){
     // this.resultList = this.data;
     console.log('hi')
     console.log(this.data);
     this.max =5;

     //this.label1 = 'reviwee 1';
     //this.label2 = 'reviwee 2';

    {

     console.log("Working");

     this.data?.map(e => {
       if (this.label?.includes(e['departmentId'])) {
          console.log('hi')
         return
       }
        console.log('hello')
       this.label?.push(e['departmentId'])
     })

     this.data?.map(e => {
       if (e['department'] == this.departments[0]) {
         this.data1.push(e['total'])
         console.log('hello2')
       }

     })


     console.log(this.label, this.departments, this.data1, this.data2)
     this.isloading = false;
    }
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
        max: 100,
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
      labels: this.label,
      datasets: [
        { data: this.data1, label: this.label1 }

      ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //   console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //   console.log(event, active);
  }

}
