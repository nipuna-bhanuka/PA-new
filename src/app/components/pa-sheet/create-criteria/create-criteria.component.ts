import { Component, OnInit } from '@angular/core';


import { CriteriaGroupService } from 'src/app/services/criteriaGroup.service';

import { CriteriaService } from 'src/app/services/criteria.service';
import { criteriaGroupModel } from 'src/app/models/criteriaGroup.model';
import { criteriaModel } from 'src/app/models/criteria.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-criteria',
  templateUrl: './create-criteria.component.html',
  styleUrls: ['./create-criteria.component.css']
})
export class CreateCriteriaComponent implements OnInit {



  criteriaGroup = new criteriaGroupModel();
  isCreating = false;
  criteria = new criteriaModel();


  constructor(private criteriagroupService : CriteriaGroupService , private criteriaService :  CriteriaService, private router: Router) { }

  ngOnInit(): void {

  }



  edit(id: string){

    localStorage.setItem('id',JSON.stringify(id));


  }


  onSubmit() {
    this.isCreating = true;
    console.log("hi");
    console.log(this.criteriaGroup);
    this.criteriagroupService.create(this.criteriaGroup).subscribe({
      next: (res) => {
        this.isCreating = false;
        this.criteriaGroup = new criteriaGroupModel();
        alert("criteria group Created");
        console.log('response: ' + res);
        this.router.navigate(["admin/view-pa"]);

      },
      error: (err) => {
        console.log(this.criteriaGroup);
        this.isCreating = false;
      },
    });

  }
}
