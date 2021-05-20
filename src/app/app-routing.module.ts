import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { AdminComponent } from './_components/admin/admin.component';
import { AddComponent } from './_components/admin/add/add.component';
import { ViewComponent } from './_components/admin/view/view.component';
import { JobsComponent } from './_components/jobs/jobs.component';


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
      }
    ]
   },
   {
     path: "jobs",
     component: JobsComponent
   },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
