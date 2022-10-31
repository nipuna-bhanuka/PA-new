import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReviweeModel } from '../models/reviwee.model';
import { EmployeeModel } from '../models/employee.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReviweeService {
  private _baseUrl = `${environment.baseUrl}/reviwee`;

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<ReviweeModel[]>(`${this._baseUrl}/list`);
  }

  getemployeeList() {
    return this.http.get<EmployeeModel[]>(`${this._baseUrl}/employeelist`);
  }

  getReviweeListPanel() {
    return this.http.get<ReviweeModel[]>(`${this._baseUrl}/reviweelist`);
  }

  getReviweeId(id: number) {
    return this.http.get<ReviweeModel[]>(`${this._baseUrl}/by-num?id=`+id);
  }

  getReviweeByPanelId(id: string) {
    return this.http.get<ReviweeModel[]>(`${this._baseUrl}/by-panelid?id=`+id);
  }

  getReviwee(id:string) {
    return this.http.get<ReviweeModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }

  create(reviwee: ReviweeModel) {
    return this.http.post(`${this._baseUrl}/create`, reviwee,{responseType: 'text'});
  }

  putData(reviwee: ReviweeModel){
    return this.http.put(`${this._baseUrl}/update`, reviwee,{responseType: 'text'});
  }

  delete(id:any){
    return this.http.delete(`${this._baseUrl}/delete?id=`+id,{responseType: 'text'});
  }


}
