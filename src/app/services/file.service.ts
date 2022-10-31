import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FileModel } from '../models/file.model';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private _baseUrl = `${environment.baseUrl}/file`;

  constructor(private http: HttpClient) {}
// const params = new HttpParams().append('file',FormData);

uploadimage(image: FormData) {
  // const httpparams = new HttpParams({
  //     fromObject : {
  //       iFormFile : image,
  //       organization : orgid
  //     }
  //   })
  return this.http.post(`${this._baseUrl}/uploadimage`, image, {responseType: 'text'});
}

updateOrganization(data:FileModel){
  return this.http.put(`${this._baseUrl}/updateorganization`, data, {responseType: 'text'});
}

}
