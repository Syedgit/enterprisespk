import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyJobService {
  private  baseUrl = "http://localhost:9001";
  constructor(private http:HttpClient) { }

  upload(data: any): Observable<HttpEvent<any>> {
    console.log("Apply-Job-Service>>>>>>>", data)
    const req = new HttpRequest('POST', `${this.baseUrl}/api/applyjob`, data, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/resumeFiles`);
  }
}
