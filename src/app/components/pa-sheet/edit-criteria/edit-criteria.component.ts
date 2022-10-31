import { Component, OnInit } from '@angular/core';
import { CriteriaGroupService } from 'src/app/services/criteriaGroup.service';
import { CriteriaService } from 'src/app/services/criteria.service';
import { criteriaGroupModel } from 'src/app/models/criteriaGroup.model';
import { criteriaModel } from 'src/app/models/criteria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-criteria',
  templateUrl: './edit-criteria.component.html',
  styleUrls: ['./edit-criteria.component.css']
})
export class EditCriteriaComponent implements OnInit {

  //criteriaGroup = any;
  id : string = '';
  isUpdating = false;
  criteriaGroup : any;
  isCreating = false;
  criterias : any;
  criteria = new criteriaModel();
  criteriaGroups = new criteriaGroupModel();



  constructor(private criteriagroupService : CriteriaGroupService , private criteriaService :  CriteriaService, private router: Router) { }

  ngOnInit(): void {

    this.id = JSON.parse(localStorage.getItem('id') || '{}');
    console.log(this.id);
   this.criteriagroupService.getcriteriaGroup(this.id).subscribe({
     next: (res)=>{
       this.criteriaGroup = res;
       console.log(this.criteriaGroup);
     },
     error : (error)=>{
       console.log(error);
     },
   });
  //  this.criteriaService.getCriteriabyGroup(this.id).subscribe({
  //   next: (res)=>{
  //     this.criterias = res;
  //     console.log(this.criterias);
  //   },
  //   error : (error)=>{
  //     console.log(error);
  //   },
  // });
  }

  onSubmit() {
    console.log(this.criteriaGroup);
    this.isUpdating = true;
    this.criteriagroupService.update(this.criteriaGroup).subscribe({
      next: (res) => {
        this.isUpdating = false;
        alert("PA sheet Updated");
        console.log('response: ' + res);
        this.router.navigate(["admin/view-pa"]);
      },
      error: (err) => {
        this.isUpdating = false;
        console.log('Error: ' + err);
        console.log("You have an error");
      },
    });
  }

  }


