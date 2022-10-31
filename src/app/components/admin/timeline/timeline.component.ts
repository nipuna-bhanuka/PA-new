import { Component, OnInit } from '@angular/core';
import { TimelineModel } from 'src/app/models/timeline.model';
import { TimelineService } from 'src/app/services/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timelineAct : TimelineModel[] | undefined

  constructor(private timelineservice: TimelineService) { }

  ngOnInit(): void {
    this.getTimelineActivity();
  }

  getTimelineActivity(){
    this.timelineservice.getList().subscribe({
      next: (res) => {
        this.timelineAct = res;
        console.log(this.timelineAct)

      }, error: (err) => {
        console.log(err);
      }
    })
  }

}


