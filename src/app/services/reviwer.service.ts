import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReviwerModel } from '../models/reviwer.model';
import { EmployeeModel } from '../models/employee.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ReviwerService {
  private _baseUrl = `${environment.baseUrl}/reviwer`;

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<ReviwerModel[]>(`${this._baseUrl}/list`);
  }

  getemployeeList() {
    return this.http.get<EmployeeModel[]>(`${this._baseUrl}/employeelist`);
  }

  getReviwerListPanel() {
    return this.http.get<ReviwerModel[]>(`${this._baseUrl}/reviwerlist`);
  }

  getReviwer(id:string) {
    return this.http.get<ReviwerModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }

  create(reviwer: ReviwerModel) {
    return this.http.post(`${this._baseUrl}/create`, reviwer,{responseType: 'text'});
  }

  putData(reviwer: ReviwerModel){
    return this.http.put<ReviwerModel>(`${this._baseUrl}/update`, reviwer);
  }

  delete(id:any){
    return this.http.delete(`${this._baseUrl}/delete?id=`+id,{responseType: 'text'});
  }


}
