import { Component, OnInit } from '@angular/core';
import { criteriaGroupModel } from 'src/app/models/criteriaGroup.model';
import { CriteriaGroupService } from 'src/app/services/criteriaGroup.service';

import { CriteriaService } from 'src/app/services/criteria.service';

import { criteriaModel } from 'src/app/models/criteria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-subcriteria',
  templateUrl: './create-subcriteria.component.html',
  styleUrls: ['./create-subcriteria.component.css']
})
export class CreateSubcriteriaComponent implements OnInit {

  criteriaGroups : any;
  isCreating = false;
  criteria = new criteriaModel();


  constructor(private criteriagroupService : CriteriaGroupService , private criteriaService :  CriteriaService, private router: Router) { }

  ngOnInit(): void {
    this.showCriteriaGroups()
  }

  showCriteriaGroups(){
    this.criteriagroupService.getList().subscribe(
      (data: any)=>{
        this.criteriaGroups = data,
        console.log(this.criteriaGroups);
      }
    )
  }

  onSubmit() {
    this.isCreating = true;
    console.log("hi");
    console.log(this.criteria);
    this.criteriaService.create(this.criteria).subscribe({
      next: (res) => {
        this.isCreating = false;
        this.criteria = new criteriaModel();
        alert("criteria  Created");
        console.log('response: ' + res);
        this.router.navigate(["admin/view-pa"]);

      },
      error: (err) => {
        console.log(this.criteria);
        this.isCreating = false;
      },
    });

  }

}
