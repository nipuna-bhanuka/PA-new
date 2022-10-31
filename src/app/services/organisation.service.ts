import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrganizationModel } from '../models/organization.model';
import { FileModel } from '../models/file.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrganisationService {
  private _baseUrl = `${environment.baseUrl}/organization`;

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<OrganizationModel[]>(`${this._baseUrl}/list`);
  }

  getOrganization(id:string) {
    return this.http.get<OrganizationModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }

  create(organization: OrganizationModel) {
    return this.http.post(`${this._baseUrl}/create`, organization, {responseType: 'text'});
  }



  putData(organization: OrganizationModel){
    return this.http.put(`${this._baseUrl}/update`, organization, {responseType: 'text'});
  }

  delete(id:any){
    return this.http.delete(`${this._baseUrl}/delete?id=`+id , {responseType: 'text'});
  }


}
