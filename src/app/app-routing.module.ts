import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatherComponent } from './wather/wather.component'

const routes: Routes = [
  { path: '', component: WatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
