import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplyJobService } from './apply-job.service';
@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {
  applyForm: FormGroup;
  jobState: any;
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileHolder: File | null;
  fileInfos?: Observable<any>;
  constructor(public fb: FormBuilder, private router:Router, private uploadService: ApplyJobService) {
    const navigation = this.router.getCurrentNavigation();
    this.jobState = navigation.extras.state as {};
    this.fileHolder = null;
    this.applyForm = this.fb.group({
      jobTitle: [''],
      name: [''],
      address: [''],
      city: [''],
      province: [''],
      email: [''],
      phone: [''],
      experience: [''],
      skills: [''],
      file:['']
    })
  }

  ngOnInit() {
    // this.applyForm.patchValue({jobTitle: this.jobState.jobTitle});
    this.fileInfos = this.uploadService.getFiles();
  }
  
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.fileHolder = (event.target.files[0] as File);
    }
  }

  submitJob(): void {
    this.progress = 0;
    if (this.fileHolder) {
      let formData: FormData = new FormData();
        if (this.applyForm.valid && this.fileHolder) {
          this.applyForm.controls.file.setValue(this.fileHolder);
          console.log("FORM VALUES>>>>", this.applyForm.value);
          this.uploadService.upload(this.applyForm.value).subscribe(
            (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
                this.getAllResume();
                this.selectedFiles = undefined;
              }
            },
            (err: any) => {
              console.log(err);
              this.progress = 0;
    
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
    
              this.currentFile = undefined;
            });
        }   
    }   
    }

  getAllResume() {
      this.uploadService
        .getFiles()
        .subscribe(
          files => {
            console.log('ALL Files', files);
    
          });
      }
  }
  // uploadFileToActivity() {
  //   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
  //     // do something, if upload success
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  //Service 
//   public upload(formData) {

//     return this.httpClient.post<any>(this.SERVER_URL, formData, {  
//        reportProgress: true,  
//        observe: 'events'  
//     });  
//  }
//}
