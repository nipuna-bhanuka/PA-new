import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TeamModel } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private _baseUrl = `${environment.baseUrl}/team`;

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<TeamModel[]>(`${this._baseUrl}/list`);
  }
  getListbyDepartmentId(departmentId:string) {
    return this.http.get<TeamModel[]>(`${this._baseUrl}/by-departmentid?departmentid=`+departmentId);
  }
  getTeam(id:string) {
    return this.http.get<TeamModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }
  create(team: TeamModel) {
    return this.http.post(`${this._baseUrl}/create`, team,{responseType: 'text'});
  }
  update(team: TeamModel) {
    return this.http.put(`${this._baseUrl}/update`, team, {responseType: 'text'});
  }
  delete(id : any) {
    return this.http.delete(`${this._baseUrl}/delete?id=`+id,{responseType: 'text'});
  }
}
