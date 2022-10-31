import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { criteriaModel } from '../models/criteria.model';



@Injectable({
  providedIn: 'root'
})
export class CriteriaService {

  private _baseUrl = `${environment.baseUrl}/Criteria`;

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<criteriaModel[]>(`${this._baseUrl}/list`);
  }

  getCriteriabyGroup(id:string) {
    return this.http.get<criteriaModel[]>(`${this._baseUrl}/by-criteriagroupid?criteriagroupid=` +id);
  }

  getcriteria(id:string) {
    return this.http.get<criteriaModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }


  // getPAsheet(id:string) {
  //   return this.http.get<PAsheetModel[]>(`${this._baseUrl}/by-id?id=`+id);
  // }

  create(criteria:  criteriaModel) {
    return this.http.post(`${this._baseUrl}/create`, criteria, {responseType:'text'});
  }



  delete(id:any){
    return this.http.delete(`${this._baseUrl}/delete?id=`+id,{responseType:'text'});
  }


  update(criteria: criteriaModel ){
    return this.http.put(`${this._baseUrl}/update`, criteria, {responseType:'text'});
  }

}
