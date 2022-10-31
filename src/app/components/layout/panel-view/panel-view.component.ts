import { Component, OnInit } from '@angular/core';
import { PanelReviwerModel } from './../../../models/panelReviwer.model';
import { PanelReviwerService } from './../../../services/panelReviwer.service';
import { ReviweeService } from './../../../services/reviwee.service';
import { ReviweeModel } from 'src/app/models/reviwee.model';
import { PanelService } from 'src/app/services/panel.service';
import { PanelModel } from 'src/app/models/panel.model';

@Component({
  selector: 'app-panel-view',
  templateUrl: './panel-view.component.html',
  styleUrls: ['./panel-view.component.css']
})
export class PanelViewComponent implements OnInit {
  myid: string = ''
  isLoading = false;
  reviwerList: PanelReviwerModel[] | undefined;
  reviweeList: ReviweeModel[] | undefined;
  panel: any;
  panelNumber!: number;
  constructor(private panelReviwerService: PanelReviwerService, 
    private reviweeService: ReviweeService, private panelService:PanelService) { }

  ngOnInit(): void {
    this.myid = JSON.parse(localStorage.getItem('id') || '{}')

    this.getReviwerList();
    this.getPanel();
    console.log("reviwee");
    this.getReviweesList();
  }

  getReviwerList(){
    this.isLoading = true;
    this.panelReviwerService.getList(this.myid).subscribe({
      next: (res) => {
        this.reviwerList = res;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    })
  }

  getReviweesList(){
    this.isLoading = true;
    this.reviweeService.getReviweeByPanelId(this.myid).subscribe({
      next: (res) => {
        this.reviweeList = res;
        console.log("start");
        console.log(this.reviweeList);
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    })
  }

  getPanel(){
    this.isLoading = true;
    this.panelService.getPanel(this.myid).subscribe({
      next: (res) => {
        this.panel = res;
        this.panelNumber = this.panel.panelNumber;
        console.log(this.panel);        
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    })
  }
}
