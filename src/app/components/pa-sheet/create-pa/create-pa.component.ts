import { Component, OnInit } from '@angular/core';
import { PAsheetModel } from 'src/app/models/pasheet.model';
import { PAsheetService } from 'src/app/services/pasheet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-pa',
  templateUrl: './create-pa.component.html',
  styleUrls: ['./create-pa.component.css']
})
export class CreatePAComponent implements OnInit {

  pasheet = new PAsheetModel();
  isCreating = false;


  constructor(private pasheetService: PAsheetService, private route: ActivatedRoute , private router: Router ) { }

  ngOnInit(): void {}

  onSubmit() {
    this.isCreating = true;
    this.pasheetService.create(this.pasheet).subscribe({
      next: (res) => {

        this.isCreating = false;
        this.pasheet = new PAsheetModel();
        alert("PA sheet Created");
        console.log('response: ' + res);
        this.router.navigate(["admin/admin-pa"]);
      },
      error: (err) => {
        this.isCreating = false;
      },
    });
  }



}
