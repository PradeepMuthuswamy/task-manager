import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'tasks',
        component:TasksComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
