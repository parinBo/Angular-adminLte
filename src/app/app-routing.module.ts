import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopsComponent } from './workshops/workshops.component';

const routes: Routes = [
  {path:"workshops",component:WorkshopsComponent,loadChildren:()=>import("./workshops/workshops.module").then(x=>x.WorkshopsModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
