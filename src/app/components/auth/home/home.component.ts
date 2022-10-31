import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails: any;

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe({
      next: res => {
        this.userDetails = res;
      },
      error :err => {
        console.log(err);
      },
    });
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
