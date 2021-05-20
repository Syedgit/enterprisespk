import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AdminService {

  constructor(private http: HttpClient) { }

  private  url = "/api/saveClients";

  saveClientJobs(data) {
        let options = this.createRequestOptions();
        console.log("Service", data);
        return this.http.post(this.url, data, { headers: options });
    }

    private createRequestOptions() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    }
}
