import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DesignationModel } from '../models/designation.model';

@Injectable({
  providedIn: 'root',
})
export class DesignationService {
  private _baseUrl = `${environment.baseUrl}/designation`;

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<DesignationModel[]>(`${this._baseUrl}/list`);
  }
  getDepartment(id:string) {
    return this.http.get<DesignationModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }
  create(department: DesignationModel) {
    return this.http.post(`${this._baseUrl}/create`, department, {responseType:'text'});
  }
  // update(department: DesignationModel) {
  //   return this.http.put<DesignationModel>(`${this._baseUrl}/update`,designation);
  // }
  delete(id : any) {
    return this.http.delete<string>(`${this._baseUrl}/delete?id=`+id);
  }
}
