import { Component, OnInit } from '@angular/core';
import { OrganisationService } from 'src/app/services/organisation.service';
import { OrganizationModel } from './../../../models/organization.model';
import { FileService } from './../../../services/file.service';
import { FileModel } from './../../../models/file.model';

@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html',
  styleUrls: ['./view-organization.component.css']
})
export class ViewOrganizationComponent implements OnInit {
  myid!: string;
  organization: any;
  url = '';
  arr!: string[];
  uploadfile = new FileModel();

  constructor(private organizationService: OrganisationService, private fileService: FileService) { }

  ngOnInit(): void {
    this.myid = JSON.parse(localStorage.getItem('orgid') || '{}');
    this.getOrganization();
  }

  getOrganization() {
    this.organizationService.getOrganization(this.myid).subscribe({
      next: (res) => {
        this.organization = res;
        console.log(res)
        console.log(this.organization.bloburl);
      },
      error: (error) => {

      },
    })
  }

  onChangeImage(event: any) {
    event.preventDefault();
    console.log(event);
    var file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file, 'Image');

    // this.uploadfile.image = JSON.stringify(formData);
    this.uploadfile.organizationId = this.myid;
    // console.log('formData:'+formData);
    // console.log('file'+this.uploadfile);

    this.fileService.uploadimage(formData).subscribe({
      next: (res) => {
        //this.response = res;
        alert("Image uploaded successfully")
        console.log(res)
        this.uploadfile.BlobUrl = res;
        this.fileService.updateOrganization(this.uploadfile).subscribe({
          next: (res) => {
            //this.response = res;
            alert("Updated organization successfully")
            console.log(res)            
          },
          error: (err) => {
            console.log("error")
            alert(err);
          },
        });
        this.getOrganization();
      },
      error: (err) => {
        console.log("error")
        alert(err);
      },
    });
  }








}
