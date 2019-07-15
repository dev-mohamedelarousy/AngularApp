import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComAComponent } from './com-a/com-a.component';

const routes: Routes = [
  {path:'test',component:ComAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
