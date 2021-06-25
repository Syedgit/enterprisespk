import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../../_services/admin.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  CLIENTS: any = []
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  private getAllData() {
    this.adminService
      .getClients()
      .subscribe(
        posts => {
          console.log('GET all Data works', posts);
          this.CLIENTS = posts;    // <<<<< Here is the problem ************ How can I to Fix it.
  
        });
    }

}
