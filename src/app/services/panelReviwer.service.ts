import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PanelReviwerModel } from './../models/panelReviwer.model';

@Injectable({
  providedIn: 'root',
})
export class PanelReviwerService {
  private _baseUrl = `${environment.baseUrl}/panelreviwer`;

  constructor(private http: HttpClient) {}

  getList(id:string) {
    return this.http.get<PanelReviwerModel[]>(`${this._baseUrl}/by-panelId?panelId=`+id);
  }

  create(panel:PanelReviwerModel) {
    return this.http.post(`${this._baseUrl}/create`,panel, {responseType: 'text'});
  }

  delete(id:string){
    // const httpparams = new HttpParams({
    //   fromObject : {
    //     panelid : pid,
    //     reviwerid : rid
    //   }
    // })
    return this.http.delete(`${this._baseUrl}/delete?id=`+id, {responseType: 'text'});
  }


}
