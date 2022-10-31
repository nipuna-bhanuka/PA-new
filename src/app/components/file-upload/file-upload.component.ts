import { Component, OnInit } from '@angular/core';
import { FileService } from './../../services/file.service';
import { FileModel } from './../../models/file.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  response!: FileModel;

  constructor(private fileService:FileService) { }

  ngOnInit(): void {
  }

  onChangeImage(event: any) {
    event.preventDefault();
    console.log(event);
    var file = event.target.files[0];
    const formData = new FormData();
    formData.append('file',file,'Image');
    console.log(formData);
    
  }
}
