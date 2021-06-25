import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AdminService {

  constructor(private http: HttpClient) { }

  private  url = "http://localhost:9001";

  saveClientJobs(data) {
        let options = this.createRequestOptions();
        return this.http.post(`${this.url}/api/saveClients`, data, { headers: options });
    }

    private createRequestOptions() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    }

  getClients()  { 
    console.log("GET Service>>>>>>>>>");
      return this.http.get(`${this.url}/getClients`) 
    }
}
