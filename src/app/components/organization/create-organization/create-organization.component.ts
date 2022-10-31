import { Component, OnInit } from '@angular/core';
import { OrganizationModel } from 'src/app/models/organization.model';
import { OrganisationService } from 'src/app/services/organisation.service';
import { FileModel } from './../../../models/file.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css'],
})
export class CreateOrganizationComponent implements OnInit {
  organization = new OrganizationModel();
  response!: FileModel;
  fileModel!: FileModel;
  isCreating = false;
  closeResult = '';
  //file!: File;
  createForm: FormGroup;



  constructor(private organizationService: OrganisationService, private modalService: NgbModal, private formbuilder: FormBuilder) {
    this.createForm = formbuilder.group({
      name: ['', [Validators.minLength(3),Validators.required,Validators.pattern('[a-z.A-z ]*')]],
      useremail: ['', [Validators.minLength(5),Validators.required, Validators.email]],
      weblink: ['', [Validators.required,Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)]],
      registationNumber: ['', Validators.required],
      address: ['', [Validators.minLength(5),Validators.required,Validators.pattern('[a-zA-z/0-9. ]*')]]
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.organization = this.createForm.value;
    console.log(this.organization);    
    this.isCreating = true;
    this.organizationService.create(this.organization).subscribe({
      next: (res) => {
        this.isCreating = false;
        this.organization = new OrganizationModel();
        
        console.log(res);
        
      },
      error: (err) => {
        this.isCreating = false;
      },
    });

  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onChangeImage(event: any) {
    event.preventDefault();
    var file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    // this.organizationService.uploadimage(formData).subscribe({
    //   next: (res) => {
    //     //this.response = res;
    //   },
    // });
    
  }
}
