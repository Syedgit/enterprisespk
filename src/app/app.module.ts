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
    JobsComponent
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
