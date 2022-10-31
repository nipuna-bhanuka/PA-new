import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null)
    {
      localStorage.removeItem('token');
    }
  }

}
