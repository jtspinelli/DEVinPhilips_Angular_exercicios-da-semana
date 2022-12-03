import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Part1AppComponent} from "./part1/part1.app.component";
import {Part2AppComponent} from "./part2/part2.app.component";

const routes: Routes = [
  {path: 'part1', component: Part1AppComponent},
  {path: 'part2', component: Part2AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
