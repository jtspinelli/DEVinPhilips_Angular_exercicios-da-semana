import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Part1AppComponent} from "./part1/part1.app.component";

const routes: Routes = [
  {path: 'part1', component: Part1AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
