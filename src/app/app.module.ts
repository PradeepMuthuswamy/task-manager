import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from './material/material.module';
import { ListHomeComponent } from './list-home/list-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { TasksComponent } from './tasks/tasks.component';
import { SharedModule } from './shared/shared.module';
import { AddTaskComponent } from './add-task/add-task.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    AppComponent,
    LandingPageComponent,
    ListHomeComponent,
    DashboardComponent,
    NavComponent,
    TasksComponent,
    AddTaskComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  entryComponents:[
    AddTaskComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
