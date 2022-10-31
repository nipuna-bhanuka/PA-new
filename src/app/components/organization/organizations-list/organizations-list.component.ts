import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OrganizationModel } from 'src/app/models/organization.model';
import { OrganisationService } from 'src/app/services/organisation.service';


@Component({
  selector: 'app-organizations-list',
  templateUrl: './organizations-list.component.html',
  styleUrls: ['./organizations-list.component.css'],
})
export class OrganizationsListComponent implements OnInit {
  isLoading = false;
  organizationList: OrganizationModel[] | undefined;
  organization = new OrganizationModel();
  // closeResult = '';

  constructor(private organizationService: OrganisationService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getList();
  }

  // open(content: any) {
  //   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
  //     console.log(result);
  //     this.closeResult = `Closed with: ${result}`;

  //   }, (reason) => {
  //     this.closeResult = `Dismissed `;
  //   });
  //   alert("hi");

  // }

  getList() {
    this.isLoading = true;
    this.organizationService.getList().subscribe({
      next: (res) => {
        this.organizationList = res;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  onDelete(id: string) {
    console.log("out");
    if (confirm('Are you sure you want to save this thing into the database?')) {
      this.organizationService.delete(id).subscribe({
        next: (res) => {
          if (res == "Organization deleted") {
            console.log("if");
            this.getList();
          } else {
            console.log("else");
          }
          console.log(res);
          this.isLoading = false;
        },
        error: (error) => {
          console.log("error");
          this.isLoading = false;
        }
      })
      console.log('Thing was saved to the database.');
    } else {
      console.log('Thing was not saved to the database.');
    }

    this.getList();
  }

  getOrganization(id: string) {
    localStorage.setItem('orgid', JSON.stringify(id));
  }



}
