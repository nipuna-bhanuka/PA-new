import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-department-head-layout',
  templateUrl: './department-head-layout.component.html',
  styleUrls: ['./department-head-layout.component.css']
})
export class DepartmentHeadLayoutComponent implements OnInit {

  userRole!: string;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.userRole = this.service.getRole();
  }

}
