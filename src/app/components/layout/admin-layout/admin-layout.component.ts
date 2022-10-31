import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  userRole!: string;

  sidenav = true;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.userRole = this.service.getRole();
  }

  hidenav(event : boolean){
    if(this.sidenav==true){
      this.sidenav = event;
    }else{
      this.sidenav = true;
    }

    console.log(this.sidenav);
  }

}
