import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  JOBS: any = []
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getJobsData();
  }
  
  private getJobsData() {
    this.adminService
      .getJobs()
      .subscribe(
        posts => {
          console.log('GET all Data works', posts);
          this.JOBS = posts;    // <<<<< Here is the problem ************ How can I to Fix it.
  
        });
    }
}
