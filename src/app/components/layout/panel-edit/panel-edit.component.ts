import { Component, OnInit } from '@angular/core';
import { DynamicGrid } from '../../../models/grid.model';
import { PanelService } from './../../../services/panel.service';
import { PanelReviwerModel } from './../../../models/panelReviwer.model';
import { PanelReviwerService } from './../../../services/panelReviwer.service';
import { ReviwerService } from './../../../services/reviwer.service';

@Component({
  selector: 'app-panel-edit',
  templateUrl: './panel-edit.component.html',
  styleUrls: ['./panel-edit.component.css']
})
export class PanelEditComponent implements OnInit {
  myid: string = '';
  panelNumber!: number;
  panel: any;
  reviwers: any;
  reviwerList: PanelReviwerModel[] | undefined;
  isLoading = false;
  panelReviwer = new PanelReviwerModel();
  constructor(private panelService: PanelService, private panelReviwerService: 
    PanelReviwerService, private reviwerService: ReviwerService) { }

  ngOnInit(): void {
    this.myid = JSON.parse(localStorage.getItem('id') || '{}');
    console.log(this.myid);
    this.getPanel();
    this.showReviwers();
    this.getReviwerList();
  }

  onSubmit(){
    console.log(this.panelReviwer);
    this.panelReviwer.panelId = this.myid;
    console.log(this.panelReviwer);
    this.panelReviwerService.create(this.panelReviwer).subscribe({
      next: (res) => {
        console.log(res);
        alert(res);
        this.getReviwerList();
      },
      error:(err) => {
        
      }
    })
  }

  showReviwers() {
    this.reviwerService.getList().subscribe(
      (data: any) => {
        this.reviwers = data,
          console.log(this.reviwers);
      }
    )
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

  removeReviwer(reviwer: any){
    console.log('remove')
    console.log(reviwer)
    console.log('remove')
    this.panelReviwerService.delete(reviwer.id).subscribe({
      next: (res) => {
        alert(res);
        this.getReviwerList();
      },
      error: (error) => {
        alert('error')
      }
    })
    
  }

  getPanel(){
    this.isLoading = true;
    console.log('hi')
    this.panelService.getPanel(this.myid).subscribe({
      next: (res) => {
        this.panel = res;
        this.panelNumber = this.panel.panelNumber;
        console.log('hi');        
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    })
  }
}
