import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';


@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
  isLoading = false;
 //departmentwithDHList: DepartmentModel[] | undefined;
  departmentList: DepartmentModel[] | undefined;

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {

    this.getList();
  }

  getList() {
    this.isLoading = true;
    this.departmentService.getList().subscribe({
      next: (res) => {
        this.departmentList = res;
        console.log(this.departmentList);
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  delete(id: string){
      let text = "Do you want to delete the department?";
      if(confirm(text) == true){
        this.departmentService.delete(id).subscribe({
          next: (res) =>{
            if(res=="Department delete sucessful"){
              console.log(res);
              this.getList();
              alert(res);
            }
          },
        error : (error)=>{
          console.log(error);
          this.isLoading = false;
          console.log(error);
          alert("Deprtment has teams or Employees have assigned to the department, Can't delete the Department")
        },
      });
      }
  }
  edit(id: string){
    localStorage.setItem('id',JSON.stringify(id))
  }
  view(id: string){
    localStorage.setItem('id',JSON.stringify(id))
  }
}
