import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PAsheetModel } from 'src/app/models/pasheet.model';
import { PAsheetService } from 'src/app/services/pasheet.service';


@Component({
  selector: 'app-edit-pa',
  templateUrl: './edit-pa.component.html',
  styleUrls: ['./edit-pa.component.css']
})
export class EditPaComponent implements OnInit {

  id : string = '';
  isUpdating = false;
  paSheet : any;
  routeListener: any;

  constructor(private pasheetService : PAsheetService ,private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.id = JSON.parse(localStorage.getItem('id') || '{}');
     console.log(this.id);
    this.pasheetService.getPAsheet(this.id).subscribe({
      next: (res)=>{
        this.paSheet = res;
        console.log(this.paSheet.id);
      },
      error : (error)=>{
        console.log(error);
      },
    });
  }

  onSubmit() {
    console.log(this.paSheet);
    this.isUpdating = true;
    this.pasheetService.update(this.paSheet).subscribe({
      next: (res) => {
        this.isUpdating = false;
        alert("PA sheet Updated");
        console.log('response: ' + res);
        this.router.navigate(["admin/admin-pa"]);
      },
      error: (err) => {
        this.isUpdating = false;
        console.log('Error: ' + err)
      },
    });
  }
}

