import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../models/employee.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _baseUrl = `${environment.baseUrl}/employee`;

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<EmployeeModel[]>(`${this._baseUrl}/list`);
  }

  getEmployeebyDepartment(id:string) {
    return this.http.get<EmployeeModel[]>(`${this._baseUrl}/by-departmentid?departmentid=`+id);
  }

  getEmployeebyTeam(id:string) {
    return this.http.get<EmployeeModel[]>(`${this._baseUrl}/by-teamid?teamid=`+id);
  }

  getEmployee(id:string) {
    return this.http.get<EmployeeModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }

  create(employee: EmployeeModel) {
    return this.http.post(`${this._baseUrl}/create`, employee, {responseType: 'text'});
  }

  putData(employee: EmployeeModel){
    return this.http.put(`${this._baseUrl}/update`, employee, {responseType: 'text'});
  }

  delete(id:any){
    return this.http.delete(`${this._baseUrl}/delete?id=`+id, {responseType:'text'});
  }
}
