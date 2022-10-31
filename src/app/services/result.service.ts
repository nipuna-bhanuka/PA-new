import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResultModel } from '../models/result.model';



@Injectable({
  providedIn: 'root'
})
export class ResultService {
  //private _baseUrl = `${environment.baseUrl}/query`;
 //private _baseUrl1 = `${environment.baseUrl}/result`;
 private _baseUrl = 'https://localhost:5001/api/query'

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<ResultModel[]>(`${this._baseUrl}/list`);
  }

  getResultbyId(id:string) {
    return this.http.get<ResultModel[]>(`${this._baseUrl}/by-id?id=` +id);
  }

  getResultbyReviewerId(id:string) {
    return this.http.get<ResultModel[]>(`${this._baseUrl}/by-reviwerid?reviwerid=` +id);
  }

  getResultbyRevieweeId(id:string) {
    return this.http.get<ResultModel[]>(`${this._baseUrl}/by-reviweeid?reviweeid=` +id);
  }


  // getPAsheet(id:string) {
  //   return this.http.get<PAsheetModel[]>(`${this._baseUrl}/by-id?id=`+id);
  // }

  create(result: ResultModel) {
    return this.http.post(`${this._baseUrl}/create`, result, {responseType:'text'});
  }

  update(result: ResultModel){
    return this.http.put<ResultModel>(`${this._baseUrl}/update`, result);
  }

  delete(id:any){
    return this.http.delete<string>(`${this._baseUrl}/delete?id=`+id);
  }


  // putData(criteria: PAsheetModel ){
  //   return this.http.put(`${this._baseUrl}/update`, criteria);
  // }

  getTotalbyReviwee(reviweeId:string) {
    return this.http.get<ResultModel[]>(`${this._baseUrl}/total?id=`+reviweeId);
  }

  getReviwerTotalbyReviwee(reviweeId:string) {
    return this.http.get<ResultModel[]>(`${this._baseUrl}/marksbyreviwer?id=`+reviweeId);
  }

  getGroupTotalbyReviwee(reviweeId:string) {
    return this.http.get(`${this._baseUrl}/marksbygroup?id=`+reviweeId);
  }

  getReviweeTotal(reviweeId : string){
    return this.http.get(`${this._baseUrl}/reviweetotalmark?id=`+reviweeId);
  }

  getTotalbyGroups(departmentId : string){
    return this.http.get(`${this._baseUrl}/totalgroupmarksdepartment?id=`+departmentId);
  }

  getTotalDepartment(departmentId : string){
    return this.http.get(`${this._baseUrl}/totaldepartmentmark?id=`+departmentId);
  }

  getAdmintoDepartmentMarks(){
    return this.http.get(`${this._baseUrl}/totaldepartmentmarks`);
  }

  getAdmintoTotalMarks(){
    return this.http.get(`${this._baseUrl}/overallmark`);
  }


}
