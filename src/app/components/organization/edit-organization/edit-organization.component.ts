import { OrganisationService } from 'src/app/services/organisation.service';
import { OrganizationModel } from 'src/app/models/organization.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm,FormControl, FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.css']
})
export class EditOrganizationComponent implements OnInit {
   
  myid : string = ''
  isUpdating= false;
  
  organization : any;

  createForm: FormGroup;

  constructor(private router : Router, private route : ActivatedRoute, private organizationService: OrganisationService, private formbuilder: FormBuilder) {
    this.createForm = formbuilder.group({
      name: ['', [Validators.minLength(5),Validators.required,Validators.pattern('[a-z.A-z ]*')]],
      
      weblink: ['', [Validators.required,Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)]],
      registationNumber: ['', Validators.required],
      address: ['', [Validators.minLength(5),Validators.required,Validators.pattern('[a-zA-z/0-9. ]*')]]
    })
   }

  ngOnInit(): void {
    this.myid = JSON.parse(localStorage.getItem('id') || '{}')
    //this.id = String(this.route.snapshot.paramMap.get('id'));
    
         
      this.organizationService.getOrganization(this.myid).subscribe({
        next: (res) => {
          this.organization = res;
          console.log(this.organization.id);
        },
        error: (error) => {
          console.log(error);          
        },
      });
    
  }


  onSubmit(){    
    console.log(this.organization);
    this.organizationService.putData(this.organization).subscribe({
      next: (res) => {
        alert("Organization Updated");
        console.log('response: '+res);
        this.router.navigate(["/organization/list"]);
      },
      error: (err) =>{
        alert("hi")
        console.log('Error: '+err)
      },
    });  

    
  }

}
