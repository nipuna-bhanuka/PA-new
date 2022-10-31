import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { PanelModel } from 'src/app/models/panel.model';
import { DynamicGrid } from '../../../models/grid.model';
import { PanelService } from './../../../services/panel.service';
import { ReviweeModel } from 'src/app/models/reviwee.model';
import { ReviweeService } from 'src/app/services/reviwee.service';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent implements OnInit {
  isLoading = false;
  title = 'Test';
  FormGroup!: FormGroup;
  TotalRow!: number;
  panelNumber!: number;
  registationNumber!:number;
  reviweeId!: string;
  panel = new PanelModel();
  panelList: PanelModel[] | undefined;
  reviwee = new ReviweeModel();
  reviwees: any;
  isHidden = false;  


  constructor(private _fb: FormBuilder, private panelService: PanelService,private reviweeService: ReviweeService) {

  }

  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};

  ngOnInit() {
    // this.FormGroup = this._fb.group({
    //   itemRows: this._fb.array([this.initItemRow()])
    // });
    this.showReviwees();
    this.getPanelList();
    this.newDynamic = { title1: "", title2: "", title3: "" };
    this.dynamicArray.push(this.newDynamic);  
    
  } 

  onView(id: any){    
    localStorage.setItem('id', JSON.stringify(id));
  }

  onEdit(id: any){    
    localStorage.setItem('id', JSON.stringify(id));
  }

  showReviwees(){
    this.reviweeService.getReviweeListPanel().subscribe(
      (data: any)=>{
        this.reviwees = data,
        console.log(this.reviwees);
      }
    )
  }

  addRow(index : any) {
    this.newDynamic = { title1: "", title2: "", title3: "" };
    this.dynamicArray.push(this.newDynamic);
    //this.toastr.success('New row added successfully', 'New Row');  
    console.log(this.dynamicArray);
    return true;
  }

  deleteRow(index : any) {
    if (this.dynamicArray.length == 1) {
      //this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      // this.toastr.warning('Row deleted successfully', 'Delete row');  
      return true;
    }
  }

  removePanel(id:string){
    this.panelService.delete(id)
    .subscribe(
      res=>{
        alert(res);
        console.log(res);
        this.getPanelList();          
      },
      err=>{
        alert("Before the remove. Remove reviwers and reviwees from the panel");
        console.log(err)
      }
    )
  }

  getPanelList(){
    this.isLoading = true;
    this.panelService.getList().subscribe({
      next: (res) => {
        this.panelList = res;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    })
  }

  createPanel(){
    this.panelService.create("panel create").subscribe({
      next: (res) => {
        console.log("Panel created successfully");
        alert("Panel created successfully");
        this.panelNumber = res;
        this.getPanelList(); 
      },
      error: (err) => {
        console.log(err)
      },
    })
  }
 

  showForm(){
    this.isHidden = !this.isHidden;
  }

nreviwee : ReviweeModel[] | undefined;

  onSubmit(){
    console.log("hi");
    this.registationNumber=this.reviwee.employeeRegistationNumber;
    this.reviweeService.getReviweeId(this.registationNumber).subscribe({
      next: (res) => {
        this.nreviwee = res;
        console.log(this.nreviwee);
        console.log(res);
        this.isLoading = false;
      },
      error: (error) => {
        console.log('error');
        this.isLoading = false;
      },
    })

    // this.reviwee.panelId = this.panel.id;
    // console.log(this.reviwee.panelId);
  }
}
