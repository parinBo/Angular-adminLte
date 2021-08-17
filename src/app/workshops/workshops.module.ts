import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Workshop1Component } from './workshop1/workshop1.component';
import { Workshop2Component } from './workshop2/workshop2.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

var routes:Routes=[
  {path:"1",component:Workshop1Component},
  {path:"2",component:Workshop2Component}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDatepickerModule
  ]
})
export class WorkshopsModule { }
