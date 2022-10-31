import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PanelModel } from './../models/panel.model';

@Injectable({
  providedIn: 'root',
})
export class PanelService {
  private _baseUrl = `${environment.baseUrl}/panel`;

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<PanelModel[]>(`${this._baseUrl}/list`);
  }

  getPanel(id:string) {
    return this.http.get<PanelModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }

  create(panel:string) {
    return this.http.post<number>(`${this._baseUrl}/create`,panel);
  }

  putData(organization: PanelModel){
    return this.http.put<PanelModel>(`${this._baseUrl}/update`, organization);
  }

  delete(id:any){
    return this.http.delete(`${this._baseUrl}/delete?id=`+id , {responseType: 'text'});
  }


}
