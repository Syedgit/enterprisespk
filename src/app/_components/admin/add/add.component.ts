import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AdminService } from './../../../_services/admin.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form: FormGroup;
  dropdownOptions = [];
  selectedValue: string = "";
  constructor(public fb: FormBuilder, private adminService: AdminService) {
    this.form = this.fb.group({
      clientName: [''],
      agencyName: [''],
      waqalaNum: [''],
      numberOfVisas: [''],
      country: [''],
      selectedOption: [''],
      jobName: [''],
      skills:[''],
      experience:[''],
      salary:['']
    })
  }

  ngOnInit(): void {
    this.dropdownOptions = [{id: 0, val: "Client"}, {id: 1, val:"Jobs"}];
  }

  saveClient() {
    this.adminService.saveClientJobs(this.form.value).subscribe(data => {
      console.log("use data here", data);
    }, err => {
       console.log("check if any err", err);
    })
  }

  onSelectChange($event) {
  
  }



}
