import { Component, OnInit } from '@angular/core';
import { ReviwerService } from './../../../services/reviwer.service';
import { ReviwerModel } from 'src/app/models/reviwer.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employee.model';
import { NgForm,FormControl, FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
import { PanelService } from 'src/app/services/panel.service';


@Component({
  selector: 'app-reviwer-list',
  templateUrl: './reviwer-list.component.html',
  styleUrls: ['./reviwer-list.component.css']
})
export class ReviwerListComponent implements OnInit {
  isLoading = false;
  reviwerList: ReviwerModel[] | undefined;
  reviwer = new ReviwerModel();
  employeeList: EmployeeModel[] | undefined;
  employee = new EmployeeModel();  
  reviwerSelected : ReviwerModel[] | undefined;
  isCreating = false;
  panels : any;
 

  constructor(private reviwerService: ReviwerService , private employeeService: EmployeeService,
    private PanelService: PanelService) 
  {

  }

  ngOnInit(): void {
    this.getEmployeelist();
    this.getList();
  }

  onEdit(id: any){    
    localStorage.setItem('id', JSON.stringify(id));
  }

  showPanels(){
    this.PanelService.getList().subscribe(
      (data: any)=>{
        this.panels = data,
        console.log(this.panels);
      }
    )
  }

  getList() {
    this.isLoading = true;
    this.reviwerService.getList().subscribe({
      next: (res) => {
        this.reviwerList = res;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  getEmployeelist(){
    this.isLoading = true;
    this.reviwerService.getemployeeList().subscribe({
      next:(res)=>{
        this.employeeList = res;
        this.isLoading = false;
      },
      error:(error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  onDelete(id:string){
    
    if (confirm('Are you sure you want to save this thing into the database?')) {
      // Save it!
      this.reviwerService.delete(id).subscribe({
        next:(res)=>{          
          this.getList();
          this.getEmployeelist();
          alert(res);
        },
        error:(error) =>{
          console.log(error);
        }
      })
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    } 
  }

  createReviwer(id:string){
    this.isCreating = false;
    this.reviwer.employeeId =id;
    console.log(this.reviwer);
    this.reviwerService.create(this.reviwer).subscribe({
      next: (res) => {
        this.isCreating = false;
        this.reviwer = new ReviwerModel();
        alert(res);
        this.getList();
        this.getEmployeelist();
      },
      error:(err) => {
        alert("Reviwer not created");
        this.isCreating = false;
        console.log(err);
        this.getList();
      }
      
    })
    
  }
}
