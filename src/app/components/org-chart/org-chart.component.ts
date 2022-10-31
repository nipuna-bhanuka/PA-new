import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentModel } from 'src/app/models/department.model';
import { TeamService } from 'src/app/services/team.service';
import { TeamModel } from 'src/app/models/team.model';
import { TreeNode } from './Tree-Node';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employee.model';
import { ChildrenOutletContexts } from '@angular/router';


interface MyTreeNode extends TreeNode {
  name: string;
  designation?: string;
  image?: string;
  children: MyTreeNode[];

}

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {
  isLoading = false;
  abc: boolean = false;
  departmentList: DepartmentModel[] | undefined;
  teamList: TeamModel[] | undefined;
  title = 'angularcharts';


  tree: MyTreeNode = {
    name: 'CEO',
    children: [
      // {
      //     name: 'cat',
      //     css: 'background-color: #F00000',
      //     children: [
      //         {
      //             name: 'Cheetah',
      //             children: []
      //         }
      //     ]
      // },
      // {
      //     name: 'Small Cats',
      //     children: [
      //         {
      //             name: 'House Cat',
      //             children: []
      //         },
      //     ]
      // },
      // {
      //     name: 'Fake Cats',
      //     children: [],
      // }
    ]
  };

  constructor(private departmentService: DepartmentService, private teamService: TeamService, private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.getDepartment();
  }


  getDepartment() {
    this.departmentService.getList().subscribe({
      next: (res) => {
        this.departmentList = res;
        this.isLoading = false;
        console.log(this.departmentList);

        for (let department of this.departmentList) {
          console.log(department.name);

          this.tree.children.push({
            name: department.name,
            children: [],
            css: 'background-color: #F00000',
          });
          this.getListbyDepartmentId(department.id, department.name, this.tree.children.length - 1);
        }
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }



getListbyDepartmentId(departmentId: string, departmentName: string, indexOfDepartment: number) {
  this.isLoading = true;
  this.teamService.getListbyDepartmentId(departmentId).subscribe({
    next: (res) => {
      this.teamList = res;
      this.isLoading = false;
      for (let team of this.teamList) {
        this.tree.children[indexOfDepartment].children.push({
          name: team.name,
          children: [],
          css: 'background-color: #EF9056',
        })

        // var index = this.tree.children.findIndex(x => x.name === departmentName);
      }
    },
    error: (error) => {
      console.log(error);
      this.isLoading = false;
    },
  });
}





}

