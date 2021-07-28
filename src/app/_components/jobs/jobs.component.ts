import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  JOBS: any = []
  public state = '';
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getJobsData();
    this.state = window.history.state.alarm;
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

  loadApplyJobPage(e,data) {
   const navigationExtras: NavigationExtras = {
    state: data
    }
   this.router.navigate(['/apply-job'], navigationExtras)
  } 
}
