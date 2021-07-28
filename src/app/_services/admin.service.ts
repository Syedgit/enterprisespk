import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AdminService {

  constructor(private http: HttpClient) { }

  private  url = "http://localhost:9001";

  saveClientJobs(data) {
      let options = this.createRequestOptions();
      console.log("SAVECLIENT", data);
      return this.http.post(`${this.url}/api/saveClients`, data, { headers: options });
    }

  getClients()  { 
      return this.http.get(`${this.url}/getClients`) 
    }
  getJobs()  { 
      return this.http.get(`${this.url}/api/getJobs`);
    }
  saveContacts(data) {
      let options = this.createRequestOptions();
      return this.http.post(`${this.url}/api/saveContacts`, data, { headers: options });
  }

  private createRequestOptions() {
    let headers = new HttpHeaders({
        "Content-Type": "application/json"
    });
    return headers;
}
  
}
