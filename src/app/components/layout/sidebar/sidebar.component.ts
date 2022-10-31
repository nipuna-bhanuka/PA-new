import { Component, Input, OnInit } from '@angular/core';

declare interface RouteInfo{
  path:string;
  title:string;
  class:string;
}
// export const ROUTES: RouteInfo[]=[
//   {path: 'pa-list', title:'PA sheet',class:''},
//   {path: 'admin-dashboard', title:'Dashboard',class:''},
//   {path: 'department-head-dashboard', title:'Dashboard',class:''},
//   {path: 'team-member-dashboard', title:'Dashboard',class:''},
//   {path: 'admin-pa', title:'PA sheet',class:''},
//   {path: 'departments-list', title:'Department',class:''},
//   {path: 'team-list', title:'Team',class:''},
//   {path: 'employee-list', title:'Employee',class:''},
//   {path: 'org-chart', title:'OrgChart',class:''},
//   {path: 'employee-profile', title:'Profile',class:''},
//   {path: 'timeline', title:'Timeline', class:''},

//   {path: 'reviwer-list', title:'Reviwer',class:''},
//   {path: 'reviwee-list', title:'Reviwee',class:''},
//   {path: 'panel-list', title:'Panel',class:''},
// ];

export const ROUTES1: RouteInfo[]=[
  {path: 'admin-dashboard', title:'Dashboard',class:''},
  {path: 'departments-list', title:'Department',class:''},
  {path: 'team-list', title:'Team',class:''},
  {path: 'employee-list', title:'Employee',class:''},
  {path: 'org-chart', title:'OrgChart',class:''},
  {path: 'employee-profile', title:'Profile',class:''},
  {path: 'timeline', title:'Timeline', class:''},
];


export const ROUTES2: RouteInfo[]=[
  {path: 'department-head-dashboard', title:'Dashboard',class:''},
  //{path: 'departments-list', title:'Department',class:''},
  {path: 'team-list', title:'Team',class:''},
  {path: 'employee-list', title:'Employee',class:''},
  {path: 'org-chart', title:'OrgChart',class:''},
  {path: 'employee-profile', title:'Profile',class:''},
];

export const ROUTES3: RouteInfo[]=[
  {path: 'team-member-dashboard', title:'Dashboard',class:''},
  {path: 'employee-profile', title:'Profile',class:''},
  {path: 'org-chart', title:'OrgChart',class:''},

];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems : any;
  @Input() fromWhere : string = "";

  constructor() { }

  ngOnInit(): void {
    if(this.fromWhere == "Admin")
    {
      this.menuItems = ROUTES1.filter(menuItem => menuItem);
    }
    else if(this.fromWhere == "Department Head")
    {
      this.menuItems = ROUTES2.filter(menuItem => menuItem);
    }
    else if(this.fromWhere == "Employee")
    {
      this.menuItems = ROUTES3.filter(menuItem => menuItem);
    }
    else
    {
      console.log("Something went wrong");
    }

    //this.menuItems = ROUTES1.filter(menuItem => menuItem);
  }

}
