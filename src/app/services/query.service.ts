import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResultModel } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private _baseUrl = `${environment.baseUrl}/query`;

  constructor(private http: HttpClient) { }


  getAllEmployeeCount(){
    return this.http.get(`${this._baseUrl}/noOfemployees`);
  }

  getEmployeeCountbyDepartment(departmentId : string){
    return this.http.get(`${this._baseUrl}/noOfemployees?id=`+departmentId);
  }

  getEmployeeCountbyTeam(teamId : string){
    return this.http.get(`${this._baseUrl}/noOfemployees?id=`+teamId);
  }

  getAllDepartmentsCount(){
    return this.http.get(`${this._baseUrl}/noOfdepartments`);
  }

  getTeamsCountbyDepartment(departmentId : string){
    return this.http.get(`${this._baseUrl}/noOfemployees?id=`+departmentId);
  }

  getAllTeamsCount(){
    return this.http.get(`${this._baseUrl}/noOfteams`);
  }


}
