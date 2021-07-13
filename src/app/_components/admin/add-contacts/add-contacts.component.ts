import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  contactForm: FormGroup;
  constructor(public fb: FormBuilder, private adminService: AdminService) {
    this.contactForm = this.fb.group({
      name: [''],
      address: [''],
      city: [''],
      province: [''],
      Email: [''],
      phone: ['']
    })
  }

  ngOnInit(): void {
  }
  saveContacts() {
    this.adminService.saveContacts(this.contactForm.value).subscribe(data => {
      console.log("use data here", data);
    }, err => {
       console.log("check if any err", err);
    })
  }

}
