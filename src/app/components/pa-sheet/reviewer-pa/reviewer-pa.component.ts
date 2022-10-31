import { Component, OnInit } from '@angular/core';

import { CriteriaGroupService } from 'src/app/services/criteriaGroup.service';
import { CriteriaService } from 'src/app/services/criteria.service';
import { criteriaGroupModel } from 'src/app/models/criteriaGroup.model';
import { criteriaModel } from 'src/app/models/criteria.model';
import { Router } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';
import { ResultModel } from 'src/app/models/result.model';

@Component({
  selector: 'app-reviewer-pa',
  templateUrl: './reviewer-pa.component.html',
  styleUrls: ['./reviewer-pa.component.css']
})
export class ReviewerPaComponent implements OnInit {

  isLoading = false;
  show : Boolean = true;
  criteriaGroups: criteriaGroupModel[] | undefined;
  criterias: criteriaModel[] | undefined;
  criteria : any;
  isUpdating = false;
  id : string='';


  constructor(private criteriagroupService : CriteriaGroupService , private criteriaService :  CriteriaService, private resultService : ResultService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.isLoading = true;
    this.criteriagroupService.getList().subscribe({
      next: (res) => {
        this.criteriaGroups = res;
        console.log(this.criteriaGroups)
        this.isLoading = false;
      },

      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    })

    this.criteriaService.getList().subscribe({
      next: (res) => {
        this.criterias = res;
        console.log(this.criterias)
        this.isLoading = false;
      },

      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });

  }

  

  edit(id: string){

    localStorage.setItem('id',JSON.stringify(id));


  }

  onSubmit() {
    console.log(this.criteria);
    this.isUpdating = true;
    this.show=false;
    this.criteriaService.update(this.criteria).subscribe({
      next: (res) => {
        this.isUpdating = false;
        alert("Criteria Updated");
        console.log('response: ' + res);

      },
      error: (err) => {
        this.isUpdating = false;
        console.log('Error: ' + err)
      },
    });
  }
}
