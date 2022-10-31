import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PAsheetModel } from '../models/pasheet.model';


@Injectable({
  providedIn: 'root'
})
export class PAsheetService {

  private _baseUrl = `${environment.baseUrl}/PAsheet`;

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<PAsheetModel[]>(`${this._baseUrl}/list`);
  }

  getPAsheet(id:string) {
    return this.http.get<PAsheetModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }

  create(pasheet: PAsheetModel) {
    return this.http.post(`${this._baseUrl}/create`, pasheet, {responseType:'text'});
  }

  update(pasheet: PAsheetModel){
    return this.http.put<PAsheetModel>(`${this._baseUrl}/update`, pasheet);
  }

  delete(id:any){
    return this.http.delete<string>(`${this._baseUrl}/delete?id=`+id);
  }

}
