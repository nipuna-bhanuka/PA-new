import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-team-member-layout',
  templateUrl: './team-member-layout.component.html',
  styleUrls: ['./team-member-layout.component.css']
})
export class TeamMemberLayoutComponent implements OnInit {

  userRole!: string;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.userRole = this.service.getRole();
  }

}
