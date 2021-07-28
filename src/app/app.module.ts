import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { AdminComponent } from './_components/admin/admin.component';
import { AddComponent } from './_components/admin/add/add.component';
import { ViewComponent } from './_components/admin/view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './_components/jobs/jobs.component';
import { AddContactsComponent } from './_components/admin/add-contacts/add-contacts.component';
import { ContactUsComponent } from './_components/contact-us/contact-us.component';
import { ApplyJobComponent } from './_components/jobs/apply-job/apply-job.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    AdminComponent,
    AddComponent,
    ViewComponent,
    JobsComponent,
    AddContactsComponent,
    ContactUsComponent,
    ApplyJobComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
