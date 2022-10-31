import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimelineModel } from '../models/timeline.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private _baseUrl = `${environment.baseUrl}/auditlog`;

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<TimelineModel[]>(`${this._baseUrl}/list`);
  }

  getTimeline(id:string) {
    return this.http.get<TimelineModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }
}
