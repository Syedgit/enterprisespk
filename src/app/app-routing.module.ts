import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { AdminComponent } from './_components/admin/admin.component';
import { AddComponent } from './_components/admin/add/add.component';
import { ViewComponent } from './_components/admin/view/view.component';
import { JobsComponent } from './_components/jobs/jobs.component';
import { AddContactsComponent } from './_components/admin/add-contacts/add-contacts.component';
import { ContactUsComponent } from './_components/contact-us/contact-us.component';
import { ApplyJobComponent } from './_components/jobs/apply-job/apply-job.component';


  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent,
    children: [
      {
        path: "add-details",
        component: AddComponent
      },
      {
        path: "view-details",
        component: ViewComponent
      },
      {
        path: "add-contacts",
        component: AddContactsComponent
      }
    ]
   },
   {
     path: "jobs",
     component: JobsComponent
   },
   {
     path:"apply-job",
     component: ApplyJobComponent
   },
   {
    path: "contact-us",
    component: ContactUsComponent
  },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
