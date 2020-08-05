import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusabletableComponent } from './reusable-table/reusable-table.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [ReusabletableComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ReusabletableComponent
  ]
})
export class SharedModule { }
