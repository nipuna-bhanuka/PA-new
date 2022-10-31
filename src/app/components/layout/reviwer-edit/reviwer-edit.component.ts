import { Component, OnInit } from '@angular/core';
import { PanelService } from 'src/app/services/panel.service';
import { ReviwerService } from 'src/app/services/reviwer.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators, FormsModule,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reviwer-edit',
  templateUrl: './reviwer-edit.component.html',
  styleUrls: ['./reviwer-edit.component.css']
})
export class ReviwerEditComponent implements OnInit {
  createForm: FormGroup;
  reviwer: any;
  panels: any;
  myid: string = ''
  constructor(private panelService: PanelService, private reviwerService: ReviwerService,
    private router:Router, private formbuilder:FormBuilder ) 
    { 
      this.createForm = formbuilder.group({
        pselect: ['', [Validators.required]]
      });
    }

  ngOnInit(): void {
    this.showPanels();
    this.myid = JSON.parse(localStorage.getItem('id') || '{}')
    this.reviwerService.getReviwer(this.myid).subscribe({
      next: (res) => {
        this.reviwer = res;
        console.log(this.reviwer.id);
        console.log(this.reviwer)
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit(){
    console.log(this.reviwer);
    this.reviwerService.putData(this.reviwer).subscribe({
      next: (res) => {
        alert("reviwer Updated");
        console.log('response: ' + res);
        this.router.navigate(["../edit"]);
      },
      error: (err) => {
        console.log('Error: ' + err)
      },
    });
  }

  showPanels() {
    this.panelService.getList().subscribe(
      (data: any) => {
        this.panels = data,
          console.log(this.panels);
      }
    )
  }
}
