import { Component, OnInit } from '@angular/core';
import { ReviweeService} from 'src/app/services/reviwee.service';
import { ReviweeModel } from './../../../models/reviwee.model';
import { EmployeeService } from './../../../services/employee.service';
import { EmployeeModel } from 'src/app/models/employee.model';
import { PanelService } from './../../../services/panel.service';
import { NgForm,FormControl, FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reviwee-list',
  templateUrl: './reviwee-list.component.html',
  styleUrls: ['./reviwee-list.component.css','../panel-list/panel-list.component.css']
})
export class ReviweeListComponent implements OnInit {
  isLoading = false;
  reviweeList: ReviweeModel[] | undefined;
  reviwee = new ReviweeModel();
  reviweeSelected : ReviweeModel[] | undefined;
  panels : any;
  createForm: FormGroup;

  employeeList: EmployeeModel[] | undefined;
  employee = new EmployeeModel();  
  isCreating = false;

  constructor(private reviweeService: ReviweeService , private employeeService: EmployeeService,
    private panelService: PanelService,private formbuilder: FormBuilder) { 
      this.createForm = formbuilder.group({
        name: ['', [Validators.minLength(5),Validators.required,Validators.pattern('[a-z.A-z ]*')]],
        
        weblink: ['', [Validators.required,Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)]],
        registationNumber: ['', Validators.required],
        address: ['', [Validators.minLength(5),Validators.required,Validators.pattern('[a-zA-z/0-9. ]*')]]
      })
    }

  ngOnInit(): void {    
    this.getList();
    this.getEmployeelist();
    this.showPanels();
  }

  onEdit(id: any){    
    localStorage.setItem('id', JSON.stringify(id));
  }

  showPanels(){
    this.panelService.getList().subscribe(
      (data: any)=>{
        this.panels = data,
        console.log(this.panels);
      }
    )
  }

  getList(){
    this.isLoading = true;
    this.reviweeService.getList().subscribe({
      next: (res) => {
        this.reviweeList = res;
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
      this.reviweeService.delete(id).subscribe({
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

  onSave(id:string){

  }

  getEmployeelist(){
    this.isLoading = true;
    this.reviweeService.getemployeeList().subscribe({
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

  createReviwee(id : any){
    this.isCreating = false;
    this.reviwee.employeeId =id;
    console.log(this.reviwee);
    this.reviweeService.create(this.reviwee).subscribe({
      next: (res) => {
        this.isCreating = false;
        this.reviwee = new ReviweeModel();        
        console.log(res);        
        alert(res);
        this.getList();
        this.getEmployeelist();
      },
      error:(err) => {
        alert("Reviwee not created");
        this.isCreating = false;
        console.log(err);
        this.getList();
      }
      
    })
    
  }
}
