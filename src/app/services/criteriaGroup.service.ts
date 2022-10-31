import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { criteriaGroupModel } from '../models/criteriaGroup.model';
import { PAsheetModel } from '../models/pasheet.model';


@Injectable({
  providedIn: 'root'
})
export class CriteriaGroupService {

  private _baseUrl = `${environment.baseUrl}/CriteriaGroup`;

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<criteriaGroupModel[]>(`${this._baseUrl}/list`);
  }

  getcriteriaGroup(id:string) {
    return this.http.get<criteriaGroupModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }

  create(criteriaGroup: criteriaGroupModel) {
    return this.http.post(`${this._baseUrl}/create`, criteriaGroup,{responseType:'text'});
  }

  update(criteriaGroup: criteriaGroupModel){
    return this.http.put(`${this._baseUrl}/update`, criteriaGroup,{responseType:'text'});
  }

  delete(id:any){
    return this.http.delete(`${this._baseUrl}/delete?id=`+id , {responseType:'text'});
  }

}
