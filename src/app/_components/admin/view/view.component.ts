import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  CLIENTS: any = []
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  private getAllData() {
    this.http
      .get('http://localhost:3000/customers')
      .subscribe(
        posts => {
          console.log('GET all Data works');
          this.CLIENTS = posts;    // <<<<< Here is the problem ************ How can I to Fix it.
  
        });
    }

}
