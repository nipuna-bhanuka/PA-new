import { Component, OnInit } from '@angular/core';
import { PanelService } from './../../../services/panel.service';
import { ReviweeService } from './../../../services/reviwee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormControl, FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reviwee-edit',
  templateUrl: './reviwee-edit.component.html',
  styleUrls: ['./reviwee-edit.component.css']
})
export class ReviweeEditComponent implements OnInit {
  myid: string = ''
  panels: any;
  reviwee: any;  
  createForm: FormGroup;

  constructor(private panelService: PanelService, private reviweeService: ReviweeService,
    private router: Router, private formbuilder: FormBuilder) {
    this.createForm = formbuilder.group({
      employeeFirstName : ['', [Validators.required]]
      //pselect: ['', [Validators.required]]
    });
  }

  changeCity(e: any) {
    this.pselect?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get pselect() {
    return this.createForm.get('pselect');
  }

  ngOnInit(): void {
    this.myid = JSON.parse(localStorage.getItem('id') || '{}')
    this.showPanels();
    console.log(this.myid);
    this.reviweeService.getReviwee(this.myid).subscribe({
      next: (res) => {
        this.reviwee = res;
        console.log(this.reviwee.id);
        console.log(this.reviwee)
      },
      error: (error) => {
        console.log(error);
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

  onSubmit() {
    console.log(this.reviwee);
    this.reviweeService.putData(this.reviwee).subscribe({
      next: (res) => {
        alert("Reviwee Updated");
        console.log('response: ' + res);
        this.router.navigate(["admin/reviwee-list"]);
      },
      error: (err) => {
        console.log('Error: ' + err)
      },
    });


  }
}
