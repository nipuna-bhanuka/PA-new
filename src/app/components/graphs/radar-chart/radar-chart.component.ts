import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {
  @Input() fromWhere : string = "";
  @Input() data :any ;

  progressBar : any;
  valueContainer : any;

  constructor() { }

  ngOnInit(): void {
   console.log("nippa");
   console.log(this.data);

    this.progressBar = document.querySelector(".circular-progress");
    this.valueContainer = document.querySelector(".value-container");

    let progressValue = 0;
   //let progressEndValue = 30;
    let progressEndValue = Math.round(this.data);
    let speed = 20;

    let progress = setInterval(() => {
      progressValue++;
      this.valueContainer.textContent = `${progressValue}%`;
      this.progressBar.style.background = `conic-gradient(
          #4d5bf9 ${progressValue * 3.6}deg,
          #cadcff ${progressValue * 3.6}deg
      )`;
      if (progressValue == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);

  }
}
